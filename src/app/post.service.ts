import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post, PostsResponse } from './home/home.component';
import { environment } from '../environments/config';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private baseUrl: string = environment.backendUrl;  // Use the URL from environment config

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('access_token');
    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    }
    return headers;
  }

  getPosts(): Observable<PostsResponse> {
    return this.http.get<PostsResponse>(`${this.baseUrl}/posts`, { headers: this.getHeaders() });
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/posts/${id}`, { headers: this.getHeaders() });
  }
}
