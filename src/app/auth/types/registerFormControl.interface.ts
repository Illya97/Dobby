import { FormControl } from '@angular/forms';

export interface RegisterFormControlsModel {
  username: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
}
