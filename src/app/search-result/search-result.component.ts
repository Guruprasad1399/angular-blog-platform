import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultsComponent implements OnInit {

  searchResults: string[] = [];
  searchQuery: string = '';  // Added this property for the search query

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

  performSearch(): void {
    // Implement your search logic here
    // For now, let's filter the dummy results based on the searchQuery
    this.loadDummySearchResults();
    if (this.searchQuery) {
      this.searchResults = this.searchResults.filter(result => 
        result.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
}
