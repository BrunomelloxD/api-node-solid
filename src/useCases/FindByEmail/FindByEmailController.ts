import { Request, Response } from 'express'
import { FindByEmailUseCase } from './FindByEmailUseCase'

export class FindByEmailController {
    constructor(private findByEmailUseCase: FindByEmailUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { email } = request.body

        try {
            const user = await this.findByEmailUseCase.execute({ email })

            return response.status(200).json(user)
        } catch (err: Error | any) {
            return response
                .status(400)
                .json({ message: err.message || 'Unexpected error.' })
        }
    }
}
