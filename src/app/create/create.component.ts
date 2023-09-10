import { Component } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create.component.html', // Corrected template URL
  styleUrls: ['./create.component.scss']
})

export class CreatePostComponent {

  post = {
    title: '',
    content: ''
  };

  createPost(): void {
    // Call a service to create the post
  }
}
