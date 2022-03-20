import { Injectable } from '@nestjs/common';


export type User = {

    id:number;
    name:string;
    username:string;
    password:string;
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name:'Johan Nasendi',
            username: 'john',
            password: 'admin',
          },
          {
            id: 2,
            name:'Maria Sandi',
            username: 'maria',
            password: 'user',
          },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
