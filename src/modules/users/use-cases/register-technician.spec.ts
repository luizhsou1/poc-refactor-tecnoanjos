import { RegisterTechnician } from './register-technician';
import { RegisterTechnicianDto } from '../dtos/register-technician.dto';
import { TechnicianRoleEnum } from '../enums/technician-roles.enum';
import { UsersRepoMock } from '../repositories/users-mock.repository';
import { User } from '../entities/user.entity';

const makeRegisterTechnicianDto = (): RegisterTechnicianDto => ({
  email: 'any_email',
  name: 'any_name',
  password: 'any_password',
  passwordConfirmation: 'any_password',
  role: TechnicianRoleEnum.EMPLOYEE,
  tag: 'any_tag',
  isOnline: true,
});

const makeSut = () => {
  const usersRepo = new UsersRepoMock();
  const sut = new RegisterTechnician(usersRepo);
  return {
    usersRepo,
    sut,
  };
};

describe('UseCase - UpdateUser', () => {
  test('Deve lançar "BadRequestError" se método "password" e "passwordConfirmation" forem diferetes', async () => {
    const { sut } = makeSut();
    const registerTechnicianDto = makeRegisterTechnicianDto();
    registerTechnicianDto.passwordConfirmation = 'other_password';
    const promise = sut.execute(registerTechnicianDto);
    await expect(promise).rejects.toThrow();
  });

  test('Deve lançar exceção se método "findByEmail" não retornar valor', async () => {
    const { sut, usersRepo } = makeSut();
    jest
      .spyOn(usersRepo, 'findByEmail')
      .mockReturnValueOnce(Promise.resolve(new User()));
    const promise = sut.execute(makeRegisterTechnicianDto());
    await expect(promise).rejects.toThrow();
  });

  test('Deve lançar exceção se método "createTechnician" do UsersRepository lançar exceção', async () => {
    const { sut, usersRepo } = makeSut();
    jest
      .spyOn(usersRepo, 'createTechnician')
      .mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())));
    const promise = sut.execute(makeRegisterTechnicianDto());
    await expect(promise).rejects.toThrow();
  });
});
