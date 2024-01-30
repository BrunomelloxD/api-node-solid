import { IUsersRepository } from '../../repositories/IUserRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO'

export class CreateUserUseCase {
    constructor(private userRepository: IUsersRepository) {}

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.userRepository.findByEmail(
            data.email
        )

        if (userAlreadyExists) {
            throw new Error('User already exists')
        }

        await this.userRepository.save(data)
    }
}
