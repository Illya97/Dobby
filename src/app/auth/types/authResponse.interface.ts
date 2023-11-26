import { CurrentUserInterface } from '../../shered/types/currentUser.interface';
import { RegisterRequestInterface } from './registerRequest.interface';

export interface AuthResponseInterface {
  user: CurrentUserInterface;
}
