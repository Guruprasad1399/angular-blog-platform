import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup; 

  constructor(private fb: FormBuilder, private router: Router) {  // Inject Router
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // Call your service to authenticate the user
      // If the authentication is successful, navigate to the home screen
      this.router.navigate(['/']);  // Navigate to home screen
    }
  }
}
