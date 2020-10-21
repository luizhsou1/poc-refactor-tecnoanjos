import { User } from '../entities/user.entity';
import { RegisterTechnicianDto } from '../dtos/register-technician.dto';
import { CommonRegisterDto } from '../dtos/common-register.dto';

export interface IUsersRepository {
  /**
   * Cria um técnico
   */
  createTechnician(registerTechnicianDto: RegisterTechnicianDto): Promise<User>;

  /**
   * Cria um cliente
   */
  createClient(commonRegisterDto: CommonRegisterDto): Promise<User>;

  /**
   * Cria um admin
   */
  createAdmin(commonRegisterDto: CommonRegisterDto): Promise<User>;

  /**
   * Busca usuário pelo e-mail
   */
  findByEmail(email: string): Promise<User>;
}
