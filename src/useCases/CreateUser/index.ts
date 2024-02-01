import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'

import { UsersRepository } from '../../repositories/implementations/UsersRepository'

const usersRepository = new UsersRepository()

const createUserUseCase = new CreateUserUseCase(usersRepository)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController, createUserUseCase }
