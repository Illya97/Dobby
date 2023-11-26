import { Routes } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { provideState } from '@ngrx/store';
import { authReducer } from '../../store/reducers';
import { provideEffects } from '@ngrx/effects';
import { PersistenceService } from '../../../shered/services/persistence-service.service';
import { LoginEffect } from '../../store/effects/login.effect';
import { LoginComponent } from './login.component';

export const loginRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    providers: [
      AuthService,
      provideState({ name: 'auth', reducer: authReducer }),
      provideEffects([LoginEffect]),
      PersistenceService
    ]
  }
];
