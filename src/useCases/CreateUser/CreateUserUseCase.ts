import { IUsersRepository } from '../../repositories/IUsersRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO'

export class CreateUserUseCase {
    constructor(private userRepository: IUsersRepository) {}

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.userRepository.exists(data.email)

        if (userAlreadyExists) {
            throw new Error('User already exists')
        }

        await this.userRepository.create(data)
    }
}
