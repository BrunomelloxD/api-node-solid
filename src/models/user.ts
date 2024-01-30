export interface UserModel {
    id: string
    name: string
    email: string
    password: string
    sessionToken: string | null
    passwordResetToken: string | null
    passwordResetExpires: Date | null
    createdAt: Date
    updatedAt: Date
    sessionExpiresAt: Date | null
}
