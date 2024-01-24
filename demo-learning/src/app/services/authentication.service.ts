import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isLoggedIn = false;

  constructor(private http: HttpClient) {}

  login(credential: any) {
    return this.http.post('http://localhost:3000/login', credential);
  }
}
