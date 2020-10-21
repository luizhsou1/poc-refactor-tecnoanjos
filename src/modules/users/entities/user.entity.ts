import {
  BaseEntity,
  Entity,
  Unique,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Technician } from './technician.entity';
import { Client } from './client.entity';

@Entity()
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100, select: false })
  password: string;

  @Column({ length: 100, select: false })
  salt: string;

  @Column({ default: false })
  isAdmin: boolean;

  @OneToOne((type) => Technician, (technician) => technician.user)
  technician: Technician;

  @OneToOne((type) => Client, (client) => client.user)
  client: Client;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  async checkPassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
