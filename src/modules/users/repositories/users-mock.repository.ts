import { CommonRegisterDto } from '../dtos/common-register.dto';
import { RegisterTechnicianDto } from '../dtos/register-technician.dto';
import { User } from '../entities/user.entity';
import { IUsersRepository } from './users.repository';

export class UsersRepoMock implements IUsersRepository {
  createTechnician(registerTechnicianDto: RegisterTechnicianDto): Promise<User> {
    return Promise.resolve(new User());
  }

  createClient(commonRegisterDto: CommonRegisterDto): Promise<User> {
    return Promise.resolve(new User());
  }

  createAdmin(commonRegisterDto: CommonRegisterDto): Promise<User> {
    return Promise.resolve(new User());
  }

  findByEmail(email: string): Promise<User> {
    return Promise.resolve(undefined);
  }
}
