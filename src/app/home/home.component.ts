import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: Date;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  posts: Post[] = [];
  
  constructor(private postService: PostService) { }  // Inject the service

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }
}