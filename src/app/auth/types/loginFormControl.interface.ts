import { FormControl } from '@angular/forms';

export interface LoginFormControlInterface {
  email: FormControl<string>;
  password: FormControl<string>;
}
