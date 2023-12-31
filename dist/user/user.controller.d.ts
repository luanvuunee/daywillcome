import { DayService } from 'src/day/day.service';
import { CreateUserDto, UpdateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    private dayService;
    constructor(userService: UserService, dayService: DayService);
    getAllUser(): Promise<User[]>;
    createUser(userDto: CreateUserDto): Promise<User>;
    getUserId(id: number): Promise<any>;
    updateUser(id: number, createUser: UpdateUserDto): Promise<User>;
    deleteUser(id: number): Promise<void>;
}
