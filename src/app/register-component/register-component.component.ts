import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.scss']
})

export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {  
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      // Call your service to register the user
      
      // If the registration is successful, navigate to the login screen
      this.router.navigate(['/login']);  
    }
  }
}