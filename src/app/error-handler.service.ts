// error-handler.service.ts
import { Injectable, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CustomErrorHandler implements ErrorHandler {
  constructor(private router: Router) {}

  handleError(error: any): void {
    console.error('An error occurred:', error);

    // Redirect to the ErrorComponent when an error occurs
    this.router.navigate(['/error']);
  }
}
