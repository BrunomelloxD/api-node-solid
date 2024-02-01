import { FindByEmailController } from './FindByEmailController'
import { FindByEmailUseCase } from './FindByEmailUseCase'

import { UsersRepository } from '../../repositories/implementations/UsersRepository'

const usersRepository = new UsersRepository()

const findByEmailUseCase = new FindByEmailUseCase(usersRepository)
const findByEmailController = new FindByEmailController(findByEmailUseCase)

export { findByEmailController, findByEmailUseCase }
