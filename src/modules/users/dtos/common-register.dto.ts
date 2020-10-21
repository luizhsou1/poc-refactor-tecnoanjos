import { MaxLength, IsString, IsEmail, Matches, MinLength } from 'class-validator';
import { Expose } from 'class-transformer';

export class CommonRegisterDto {
  // @Expose()
  @IsEmail({}, { message: 'Informe um endereço de e-mail válido' })
  @MaxLength(100, { message: 'O endereço de e-mail deve ter no máximo 100 caracteres' })
  @IsString({ message: "Informe um 'email' do tipo 'string'" })
  email: string;

  // @Expose()
  @MaxLength(100, { message: 'O nome deve ter no máximo 100 caracteres' })
  @IsString({ message: "Informe um 'name' do tipo 'string'" })
  name: string;

  // @Expose()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número ou um símbulo' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  @IsString({ message: "Informe um 'password' do tipo 'string'" })
  password: string;

  // @Expose()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'A confirmação de senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número ou um símbulo' })
  @MinLength(6, { message: 'A confirmação de senha deve ter no mínimo 6 caracteres' })
  @IsString({ message: "Informe um 'passwordConfirmation' do tipo 'string'" })
  passwordConfirmation: string;
}
