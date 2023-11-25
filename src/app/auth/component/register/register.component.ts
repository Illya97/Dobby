import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators
} from '@angular/forms';
import { RegisterFormModel } from './model/register-form.model';

@Component({
  selector: 'dob-register',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  public form!: FormGroup<RegisterFormModel>;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this._initializeForm();
  }

  private _initializeForm(): void {
    let fb: NonNullableFormBuilder = this._fb.nonNullable;
    this.form = fb.group<RegisterFormModel>({
      username: fb.control('', [Validators.required]),
      email: fb.control('', [Validators.required]),
      password: fb.control(null, [Validators.required])
    });
  }

  protected readonly onsubmit = onsubmit;

  onSubmit(): void {
    console.log(this.form.value);
  }
}
