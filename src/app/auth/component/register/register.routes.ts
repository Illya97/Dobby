﻿import { Route, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { AuthService } from '../../service/auth.service';
import { provideState } from '@ngrx/store';
import { authReducer } from '../../store/reducers';
import { provideEffects } from '@ngrx/effects';
import { RegisterEffect } from '../../store/effects/register.effect';
import { PersistenceService } from '../../../shered/services/persistence-service.service';
import { LoginEffect } from '../../store/effects/login.effect';

export const registerRoutes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    providers: [
      AuthService,
      provideState({ name: 'auth', reducer: authReducer }),
      provideEffects([RegisterEffect]),
      PersistenceService
    ]
  }
];
