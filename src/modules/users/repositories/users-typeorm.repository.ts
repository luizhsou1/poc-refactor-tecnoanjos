import { EntityRepository, getConnection, getRepository, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CommonRegisterDto } from '../dtos/common-register.dto';
import { RegisterTechnicianDto } from '../dtos/register-technician.dto';
import { User } from '../entities/user.entity';
import { IUsersRepository } from './users.repository';
import { Technician } from '../entities/technician.entity';
import { Client } from '../entities/client.entity';

@EntityRepository(User)
export class UsersTypeormRepo extends Repository<User> implements IUsersRepository {
  async createTechnician(registerTechnicianDto: RegisterTechnicianDto): Promise<User> {
    const technician = new Technician();
    technician.role = registerTechnicianDto.role;
    technician.tag = registerTechnicianDto.tag;

    const user = await this.createCommonUser(registerTechnicianDto);
    user.technician = technician;

    await getConnection().transaction(async (transactionalEntityManager) => {
      await transactionalEntityManager.save(technician);
      await transactionalEntityManager.save(user);
    });

    return user;
  }

  async createClient(commonRegisterDto: CommonRegisterDto): Promise<User> {
    const client = new Client();
    client.customerId = 'id_gerado_pagarme'; // TODO Chamar a API do pagarme para criar usuário na base deles e me retornar o customerId, OBS.: customerId não representa bem esse campo, trocar para algo relacionado a pagarme

    const user = await this.createCommonUser(commonRegisterDto);
    user.client = client;

    await getConnection().transaction(async (transactionalEntityManager) => {
      await transactionalEntityManager.save(client);
      await transactionalEntityManager.save(user);
    });

    return user;
  }

  async createAdmin(commonRegisterDto: CommonRegisterDto): Promise<User> {
    const user = await this.createCommonUser(commonRegisterDto);
    user.isAdmin = true;
    return await this.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    return await this.findOne({ email }); // .findOne({ email });
  }

  /**
   * @description Todas as formas de criação de um usuário compartilham esse código em comum
   */
  private async createCommonUser(commonRegisterDto: CommonRegisterDto): Promise<User> {
    const user = new User();
    user.name = commonRegisterDto.name;
    user.email = commonRegisterDto.email;
    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(commonRegisterDto.password, user.salt);
    return user;
  }
}
