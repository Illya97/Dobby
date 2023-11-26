import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { CurrentUserInterface } from '../../shered/types/currentUser.interface';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { LoginRequestInterface } from '../types/loginRequest.interface';

@Injectable()
export class AuthService {
  constructor(private _http: HttpClient) {}

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user;
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    return this._http
      .post<AuthResponseInterface>(environment.apiUrl + '/users', data)
      .pipe(map(this.getUser));
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    return this._http
      .post<AuthResponseInterface>(environment.apiUrl + '/users/login', data)
      .pipe(map(this.getUser));
  }
}
