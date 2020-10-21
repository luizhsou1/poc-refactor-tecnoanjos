import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { TechnicianRoleEnum } from '../enums/technician-roles.enum';
import { User } from './user.entity';

@Entity()
export class Technician extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne((type) => User, (user) => user.technician, { eager: true })
  @JoinColumn()
  user: User;

  @Column({ default: true })
  isOnline: boolean;

  @Column({ type: 'enum', enum: TechnicianRoleEnum })
  role: TechnicianRoleEnum;

  @Column({ length: 20 })
  tag: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
