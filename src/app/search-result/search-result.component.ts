import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultsComponent implements OnInit {

  searchResults: string[] = [];

  constructor() { }

  ngOnInit(): void {
    // Dummy data for search results (replace with actual data from your backend)
    this.loadDummySearchResults();
  }

  loadDummySearchResults(): void {
    // Replace this with actual data retrieval logic from your backend
    // For now, we'll use dummy data
    this.searchResults = [
      'Result 1',
      'Result 2',
      'Result 3',
      // Add more dummy search results
    ];
  }

}
