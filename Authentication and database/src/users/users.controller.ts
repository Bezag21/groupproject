import { Post, Put } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { Users} from './users.entity';
import { UsersService } from './users.service';
@Controller('users')
export class usersController {
  constructor(private UsersService: UsersService){}
}
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Get()
    index(): Promise<Users[]> {
      return this.usersService.findAll();
    }    
    @Post()
    create(user: Users): Promise<Users> {
      return this.usersService.create(user);
  }
}
