import dns = require("dns");
import { appDataSource } from "../config/db";
import { User } from "../entities/user";

const userRepository = appDataSource.getRepository(User);

export class UserService {
    async getallusers(): Promise<User[]> {
        return await userRepository.find();

    }
    async getuserbyid(id: number): Promise<User | null>{
        return await userRepository.findOneBy({id});
    }
    async createuser(userData: Partial<User>): Promise<User> {
        const newUser = userRepository.create(userData);
        return await userRepository.save(newUser);
    }
    async updateuser(id: number, userData: Partial<User>): Promise<User | null> {
        const user = await userRepository.findOneBy({ id });
        if (!user) {
            return null;
        }
        userRepository.merge(user, userData);
        return await userRepository.save(user);
    }
    async deleteuser(id: number): Promise<boolean> {
        const result = await userRepository.delete(id);
        return result.affected !== 0;
    }
}


