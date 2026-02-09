import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(dto: CreateUserDto): Promise<import("./schemas/user.schema").User>;
    findAll(): Promise<import("./schemas/user.schema").User[]>;
    login(clerkId: string): Promise<import("./schemas/user.schema").User>;
    findOne(id: string): Promise<import("./schemas/user.schema").User>;
    updateUser(id: string, dto: UpdateUserDto): Promise<import("./schemas/user.schema").User>;
    removeUser(id: string): Promise<{
        message: string;
    }>;
}
