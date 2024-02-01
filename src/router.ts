import { Router } from 'express'

import { createUserController } from './useCases/CreateUser'
import { findByEmailController } from './useCases/FindByEmail'

import { authMiddleware } from './middlewares/authMiddleware'

const router = Router()

router.post('/user', (request, response) => {
    return createUserController.handle(request, response)
})
router.get('/user', authMiddleware, (request, response) => {
    return findByEmailController.handle(request, response)
})

export { router }
