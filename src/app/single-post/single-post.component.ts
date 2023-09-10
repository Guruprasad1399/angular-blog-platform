import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../home/home.component';
import { PostService } from '../post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})

export class SinglePostComponent implements OnInit {
  post: Post | undefined;

  constructor(private route: ActivatedRoute, private postService: PostService) { }  // Inject the service

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    
    if (postId) {
      this.post = this.postService.getPostById(+postId);
    }
  }  
}
