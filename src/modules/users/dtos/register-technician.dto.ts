import { IsBoolean, IsEnum, MaxLength, IsString, IsOptional } from 'class-validator';
import { Expose } from 'class-transformer';
import { CommonRegisterDto } from './common-register.dto';
import { TechnicianRoleEnum } from '../enums/technician-roles.enum';

export class RegisterTechnicianDto extends CommonRegisterDto {
  // @Expose()
  @IsOptional()
  @IsBoolean({ message: "Campo 'isOnline' deve ser do tipo 'boolean'" })
  isOnline: boolean;

  // @Expose()
  @IsEnum(TechnicianRoleEnum, { message: `Informe um dos papéis a seguir: [${TechnicianRoleEnum.EMPLOYEE}, ${TechnicianRoleEnum.HOMEBASED}, ${TechnicianRoleEnum.TECNO}]` })
  role: TechnicianRoleEnum;

  // @Expose()
  @MaxLength(20, { message: 'A tag do técnico deve ter no máximo 20 caracteres' })
  @IsString({ message: "Informe uma 'tag' do tipo 'string'" })
  tag: string;
}
