import { UseCase } from '../../../shared/use-case';
import { IUsersRepository } from '../repositories/users.repository';
import { RegisterTechnicianDto } from '../dtos/register-technician.dto';
import { LoginDtoOutput } from '../dtos/login.dto';
import { ConflictError } from '../../../shared/errors/conflict.error';
import { BadRequestError } from '../../../shared/errors/bad-request.error';

export class RegisterTechnician implements UseCase<RegisterTechnicianDto, LoginDtoOutput> {
  constructor(
    private readonly usersRepo: IUsersRepository,
  ) {}

  async execute(data: RegisterTechnicianDto): Promise<LoginDtoOutput> {
    // TODO Pode tirar daqui
    let user = await this.usersRepo.findByEmail(data.email);
    if (user) {
      throw new ConflictError('E-mail já está sendo utilizado por outro usuário');
    }

    if (data.password !== data.passwordConfirmation) {
      throw new BadRequestError('Confirmação de senha não confere com senha informada', 'passwordConfirmation');
    }

    user = await this.usersRepo.createTechnician(data);

    const acessToken = 'token_gerado_por_alguma_lib_de_jwt'; // TODO Voltar e refazer essa parte

    return { user, acessToken };
  }
}
