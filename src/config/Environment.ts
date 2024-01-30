export class Environment {
    static SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS_PASSWORD ?? '14')
    static TOKEN_TYPE = process.env?.TOKEN_TYPE ?? 'hex'
    static TIME_EXPIRES_TOKEN = parseInt(process.env?.TIME_EXPIRE_TOKEN ?? '1')
}
