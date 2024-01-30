import validator from 'validator'

export const isValidEmail = async (email: string) => {
    try {
        const result = validator.isEmail(email)

        if (!result) {
            return false
        }

        return true
    } catch (error) {
        console.error(error)
    }
}
