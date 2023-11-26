import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendErrorsInterface } from '../../types/backendErrors.interface';

@Component({
  selector: 'dob-backend-error-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './backend-error-messages.component.html',
  styleUrl: './backend-error-messages.component.scss'
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps!: BackendErrorsInterface | null;

  errorMessages!: string[];

  ngOnInit(): void {
    this.errorMessages = Object.keys(
      this.backendErrorsProps as BackendErrorsInterface
    ).map((name: string) => {
      const messages = (this.backendErrorsProps as BackendErrorsInterface)[
        name
      ].join(', ');
      return `${name} ${messages}`;
    });
  }
}
