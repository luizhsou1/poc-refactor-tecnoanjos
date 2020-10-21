import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import { UseCase } from '../../../shared/use-case';
import { Controller } from '../../../shared/controller';
import { LoginDtoOutput } from '../dtos/login.dto';
import { RegisterTechnicianDto } from '../dtos/register-technician.dto';
import { UsersTypeormRepo } from '../repositories/users-typeorm.repository';
import { RegisterTechnician } from '../use-cases/register-technician';

export class RegisterTechnicianController extends Controller {
  constructor(
    private registerTechnician: UseCase<RegisterTechnicianDto, LoginDtoOutput>,
  ) { super(); }

  async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      await this.validate(req.body, RegisterTechnicianDto);

      const loginDto = await this.registerTechnician.execute(req.body);

      delete loginDto.user.salt;
      delete loginDto.user.password;

      return res.status(201).json(loginDto);
    } catch (error) {
      next(error);
    }
  }

  static create(): RegisterTechnicianController {
    const usersTypeormRepo = getCustomRepository(UsersTypeormRepo);
    const registerTechnician = new RegisterTechnician(usersTypeormRepo);
    return new this(registerTechnician);
  }
}
