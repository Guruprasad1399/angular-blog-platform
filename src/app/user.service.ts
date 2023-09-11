import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/config';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private apiUrl = `${environment.backendUrl}/register`;

  constructor(private http: HttpClient) { }

  registerUser(userData: any) {
    return this.http.post(this.apiUrl, userData);
  }
}
