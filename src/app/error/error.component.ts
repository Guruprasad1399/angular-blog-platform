import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  errorMessage: string = 'An error occurred. Please try again later.'; // Default error message

  constructor() { }

  ngOnInit(): void {
    // Your initialization code here
  }

}