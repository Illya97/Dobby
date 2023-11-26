import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { registerFailureAction } from '../actions/register.action';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { AuthService } from '../../service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistenceService } from '../../../shered/services/persistence-service.service';
import { Router } from '@angular/router';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction
} from '../actions/login.action';

@Injectable()
export class LoginEffect {
  public login$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) => {
        return this._authService.login(request).pipe(
          map((currentUser) => {
            this._persistenceService.set('token', currentUser.token);
            return loginSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              loginFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  public redirectAfterSubmit$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this._router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private _actions$: Actions,
    private _authService: AuthService,
    private _persistenceService: PersistenceService,
    private _router: Router
  ) {}
}
