import { CurrentUserInterface } from '../../shered/types/currentUser.interface';

export interface RegisterRequestInterface {
  user: {
    email: string;
    password: string;
    username: string;
  };
}
