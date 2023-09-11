import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.scss']
})
export class RegisterComponent {

  registerForm: FormGroup;
  errorMessage: string = ''; // Variable to store error message

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.userService.registerUser(this.registerForm.value).subscribe(response => {
        // Handle the response from the backend
        // If the registration is successful, navigate to the login screen
        this.router.navigate(['/login']);
      }, error => {
        // Handle any errors from the backend, e.g., show a message to the user
        this.errorMessage = 'Registration failed. Please try again.'; // Set the error message
        console.error(error);
      });
    } else {
      // Handle form validation error
      this.errorMessage = 'Please fill in all fields correctly.';
    }
  }
}
