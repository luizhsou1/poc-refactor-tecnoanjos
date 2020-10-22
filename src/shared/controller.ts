import { Request, Response, NextFunction } from 'express';
import { validateOrReject } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { BadRequestError } from './errors/bad-request.error';

// TODO Acoplado ao framework express, caso dê tempo,
// volte e crie uma interface HttpRequest e HttpResponse e crie um adapter para o express
export abstract class Controller {
  abstract handle(request: Request, response: Response, next?: NextFunction): Promise<Response>;

  /**
   * @param input Entrada que deseja validar
   * @param baseClass Classe base para validação
   * @param skipMissingProperties Caso true, pula campos não enviados, ideal para método patch
   * @throws BadRequestError
   */
  async validate(
    input: any,
    baseClass: any,
    skipMissingProperties = false,
  ): Promise<void> {
    input = plainToClass(baseClass, input);
    try {
      await validateOrReject(input, { skipMissingProperties });
    } catch (errors) {
      throw new BadRequestError(
        Object.values(errors[0].constraints)[0] as string,
        errors[0].property,
      );
    }
  }
}
