import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Dummy data for the dashboard
    this.loadDummyData();
  }

  loadDummyData(): void {
    // Replace this with actual data retrieval logic from your backend
    // For now, we'll use dummy data
    this.statistics = {
      totalPosts: 100,
      totalUsers: 50,
      recentComments: [
        { username: 'User1', comment: 'Great post!' },
        { username: 'User2', comment: 'Interesting content.' },
        // Add more dummy comments
      ]
    };
  }

  statistics: {
    totalPosts: number;
    totalUsers: number;
    recentComments: { username: string; comment: string }[];
  } | undefined;

}
