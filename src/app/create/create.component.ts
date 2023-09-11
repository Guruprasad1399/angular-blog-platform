import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreatePostComponent {
  postForm: FormGroup;
  selectedFile: File | null = null; // Store the selected file
  private backendUrl = environment.backendUrl;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  // Handle file selection
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.selectedFile = input.files[0];
    }
  }

  createPost(): void {
    const formData = new FormData();
    formData.append('title', this.postForm.value.title);
    formData.append('body', this.postForm.value.body);
    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }
    
    // Retrieve the token and author_id from local storage
    const token = localStorage.getItem('access_token');
    const author_id = localStorage.getItem('user_id');
    formData.append('author_id', author_id!);

    // Define headers (like authentication)
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });

    this.http.post(`${this.backendUrl}/posts`, formData, { headers: headers })
      .subscribe(
        response => {
          this.router.navigate(['/']);
        },
        error => {
          console.error('Error creating post:', error);
        }
      );
  }
}
