import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

export interface Post {
  id: number;
  title: string;
  body: string;
  author_id: string;
  timestamp: Date;
  image_filename: string;
}

// New interface for the API response
export interface PostsResponse {
  current_page: number;
  posts: Post[];
  total_items: number;
  total_pages: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  posts: Post[] = [];
  currentPage: number = 1; // Or initialize as needed
  totalItems: number = 0;
  totalPages: number = 0;
  
  constructor(private postService: PostService) { }  // Inject the service

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (data: PostsResponse) => {
        this.posts = data.posts;
        this.currentPage = data.current_page;
        this.totalItems = data.total_items;
        this.totalPages = data.total_pages;
      },
      error => {
        console.error('Error fetching posts:', error);
      }
    );
  }

  onPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      // Ideally, you should fetch the posts for the new page here.
      // this.fetchPosts();  // Uncomment and define this method if you want to fetch new data on page change.
    }
  }
  
  onNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      // Ideally, you should fetch the posts for the new page here.
      // this.fetchPosts();  // Uncomment and define this method if you want to fetch new data on page change.
    }
  }
  
  // Optional: Define a fetchPosts() method if you want to get new data on page change.
  // fetchPosts(): void {
  //   this.postService.getPosts(this.currentPage).subscribe(
  //     (data: PostsResponse) => {
  //       this.posts = data.posts;
  //       this.currentPage = data.current_page;
  //       this.totalItems = data.total_items;
  //       this.totalPages = data.total_pages;
  //     },
  //     error => {
  //       console.error('Error fetching posts:', error);
  //     }
  //   );
  // }
  
}
