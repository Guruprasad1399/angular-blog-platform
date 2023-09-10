import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments: { username: string; comment: string }[] = [];

  constructor() { }

  ngOnInit(): void {
    // Dummy data for comments (replace with actual data from your backend)
    this.loadDummyComments();
  }

  loadDummyComments(): void {
    // Replace this with actual data retrieval logic from your backend
    // For now, we'll use dummy data
    this.comments = [
      { username: 'User1', comment: 'Great post!' },
      { username: 'User2', comment: 'Interesting content.' },
      // Add more dummy comments
    ];
  }

}
