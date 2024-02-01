import { IUsersRepository } from '../../repositories/IUsersRepository'
import { IFindByEmailDTO } from './FindByEmailDTO'

export class FindByEmailUseCase {
    constructor(private userRepository: IUsersRepository) {}

    async execute(data: IFindByEmailDTO) {
        const user = await this.userRepository.findByEmail(data.email)

        if (!user) {
            throw new Error('User not found')
        }

        const {
            password,
            sessionToken,
            sessionExpiresAt,
            passwordResetToken,
            passwordResetExpires,
            ...result
        } = user

        return result
    }
}
