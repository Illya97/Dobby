import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendErrorMessagesComponent } from '../../../shered/component/backend-error-messages/backend-error-messages.component';
import {
  FormBuilder,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from '../../../shered/types/appState.interface';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RegisterFormControlsModel } from '../../types/registerFormControl.interface';
import { Observable } from 'rxjs';
import { BackendErrorsInterface } from '../../../shered/types/backendErrors.interface';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { RegisterFormModel } from '../../types/registerForm.interface';
import { registerAction } from '../../store/actions/register.action';
import {
  isSubmittingSelector,
  validationErrorsSelector
} from '../../store/selectors';
import { LoginFormControlInterface } from '../../types/loginFormControl.interface';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { loginFormModel } from '../../types/loginForm.interface';
import { loginAction } from '../../store/actions/login.action';

@Component({
  selector: 'dob-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    HttpClientModule,
    BackendErrorMessagesComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public form!: FormGroup<LoginFormControlInterface>;
  public isSubmitting$!: Observable<boolean>;
  public backendErrors$!: Observable<BackendErrorsInterface | null>;
  constructor(
    private _fb: FormBuilder,
    private _store: Store<AppStateInterface>
  ) {}

  ngOnInit(): void {
    this._initializeForm();
    this._initializeValues();
  }

  private _initializeForm(): void {
    const fb: NonNullableFormBuilder = this._fb.nonNullable;
    this.form = fb.group<LoginFormControlInterface>({
      email: fb.control(''),
      password: fb.control('')
    });
  }

  public onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.form.value as loginFormModel
    };
    this._store.dispatch(loginAction({ request }));
  }

  private _initializeValues() {
    this.isSubmitting$ = this._store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this._store.pipe(select(validationErrorsSelector));
  }
}
