import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

interface Post {
  title: string;
  body: string;
  image_filename?: string;
  author_id: number;
  timestamp: Date; // Changed this to Date
}

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  post: Post | undefined;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    
    if (postId) {
      this.postService.getPostById(+postId).subscribe(
        data => {
          this.post = {
            ...data,
            author_id: +data.author_id
          };
        },
        error => {
          console.error('Error fetching post:', error);
        }
      );      
    }
  }
}