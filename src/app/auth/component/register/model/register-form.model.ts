import { FormControl } from '@angular/forms';

export interface RegisterFormModel {
  username: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<number | null>;
}
