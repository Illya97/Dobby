import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { registerAction } from '../../store/actions/register.action';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { Observable } from 'rxjs';
import {
  isSubmittingSelector,
  validationErrorsSelector
} from '../../store/selectors';
import { AppStateInterface } from '../../../shered/types/appState.interface';
import { HttpClientModule } from '@angular/common/http';
import { RegisterFormModel } from '../../types/registerForm.interface';
import { RegisterFormControlsModel } from '../../types/registerFormControl.interface';
import { BackendErrorsInterface } from '../../../shered/types/backendErrors.interface';
import { BackendErrorMessagesComponent } from '../../../shered/component/backend-error-messages/backend-error-messages.component';

@Component({
  selector: 'dob-register',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    HttpClientModule,
    BackendErrorMessagesComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  public form!: FormGroup<RegisterFormControlsModel>;
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
    this.form = fb.group<RegisterFormControlsModel>({
      username: fb.control('', [Validators.required]),
      email: fb.control('', [Validators.required]),
      password: fb.control('', [Validators.required])
    });
  }

  public onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.form.value as RegisterFormModel
    };
    this._store.dispatch(registerAction({ request }));
  }

  private _initializeValues() {
    this.isSubmitting$ = this._store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this._store.pipe(select(validationErrorsSelector));
  }
}
