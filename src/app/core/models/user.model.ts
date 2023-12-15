import { Role } from './role.enum';

export interface User {
  id?: number;
  username?: string;
  password?: string;
  email?: string;
  role?: Role;
  createdAt?: Date;
  updatedAt?: Date;
}
