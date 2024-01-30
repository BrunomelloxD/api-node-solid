import bcrypt from 'bcrypt'
import { Environment } from '../../config/Environment'
import { User } from '../../entities/User'
import { isValidEmail } from '../../utils/isValidEmail'
import { IUsersRepository } from '../IUserRepository'

import { prismaClient } from '../../infra/database/prismaClient'

export class PostgresUsersRepository implements IUsersRepository {
    async exists(email: string): Promise<User | null> {
        const user = await prismaClient.user.findFirst({
            where: {
                email
            }
        })

        return user
    }

    async create(user: User): Promise<void> {
        const SALT_ROUNDS = Environment.SALT_ROUNDS

        const validator = await isValidEmail(user.email)

        if (!validator) {
            throw new Error('Invalid email')
        }

        const HASHED_PASSWORD = await bcrypt.hash(user.password, SALT_ROUNDS)

        await prismaClient.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: HASHED_PASSWORD
            }
        })
    }
}
