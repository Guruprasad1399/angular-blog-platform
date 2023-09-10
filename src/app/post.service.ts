import { Injectable } from '@angular/core';
import { Post } from './home/home.component';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private posts: Post[] = [
    {
      id: 1,
      title: 'My First Blog Post',
      content: 'This is the content of the first blog post.',
      author: 'John Doe',
      date: new Date()
    },
    {
      id: 2,
      title: 'Another Interesting Post',
      content: 'Some interesting content goes here.',
      author: 'Jane Smith',
      date: new Date()
    }
  ];

  constructor() { }

  getPosts(): Post[] {
    return this.posts;
  }

  getPostById(id: number): Post | undefined {
    return this.posts.find(post => post.id === id);
  }
}
