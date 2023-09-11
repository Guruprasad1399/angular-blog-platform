import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/config";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string = ''; // Variable to store error message

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // Send the login credentials to the server
      const credentials = this.loginForm.value;
      this.http.post(`${environment.backendUrl}/login`, credentials).subscribe(
        (response: any) => {
          // Handle successful login. You might want to save the token if your server sends one back.
          localStorage.setItem('access_token', response.access_token);
          localStorage.setItem('user_id',response.user_id);
          this.router.navigate(['/']); // Navigate to home screen on successful login
        },
        (error) => {
          // Handle login error
          this.errorMessage = 'Invalid credentials!'; // Set the error message
          console.error(error);
        }
      );
    } else {
      // Handle form validation error
      this.errorMessage = 'Email and password are required!';
    }
  }
}
