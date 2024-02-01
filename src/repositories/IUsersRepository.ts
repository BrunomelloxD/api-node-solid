import { User } from '../entities/User'
export interface IUsersRepository {
    exists(email: string): Promise<User | null>
    create(user: User): Promise<void>
    findByEmail(id: string): Promise<User | null>
}
