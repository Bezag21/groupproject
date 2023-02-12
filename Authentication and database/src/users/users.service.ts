import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { UpdateResult, DeleteResult } from  'typeorm';
export type User = any;

@Injectable()
export class UsersService {
    usersRepository: any;
    userRepository: any;
    Repository: any;

    constructor(
        @InjectRepository(Users)
        private contactRepository: Repository<User>,
    ) { }
    
    private readonly users = [
        {
            id: 1,
            username: 'Beti T',
            password: '1111',
        },
        {
            id: 2,
            username: 'Amen A',
            password: '2222',
        },
    ]

    async  findAll(): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async  create(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }

    async update(user: User): Promise<UpdateResult> {
        return await this.userRepository.update(user.id, user);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.Repository.delete(id);
    }
    async findOne(username: string): Promise<User | undefined> {
        return await this.userRepository.find(user => user.username === username)
    }
}
