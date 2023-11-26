import { CurrentUserInterface } from '../../shered/types/currentUser.interface';
import { BackendErrorsInterface } from '../../shered/types/backendErrors.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrorsInterface | null;
}
