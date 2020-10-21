import { User } from '../entities/user.entity';

export class LoginDtoOutput {
  user: User;
  acessToken: string;
}
