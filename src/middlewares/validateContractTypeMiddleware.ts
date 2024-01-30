import { NextFunction, Request, Response } from 'express'

import { ContractTypeSchema } from '../@types/contractType'

export const validateContractTypeMiddleware = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    try {
        const order = request.body

        const valid = await ContractTypeSchema.safeParseAsync(order)

        if (!valid.success) {
            return response.status(422).json(valid.error)
        }

        return next()
    } catch (error) {
        return response.status(500).json({ error })
    }
}
