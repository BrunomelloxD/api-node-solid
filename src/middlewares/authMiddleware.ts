import { NextFunction, Request, Response } from 'express'

import { prismaClient } from '../infra/database/prismaClient'

export const authMiddleware = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    try {
        const { email } = request.body
        const { authorization } = request.headers

        if (!authorization) {
            return response.status(401).send()
        }

        const token = authorization.replace('Bearer', '').trim()

        const isValidToken = await prismaClient.user.findFirst({
            where: {
                email,
                sessionToken: token
            }
        })

        if (!isValidToken) {
            return response.status(401).send()
        }

        return next()
    } catch (error) {
        return response.status(500).json({ error })
    }
}
