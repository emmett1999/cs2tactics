import { Component } from '@angular/core';
import { SearchBarService } from '../search-bar.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  value: string = "";

  constructor(private searchService: SearchBarService) {

  }

  ngOnInit(): void {
    
  }

  setLatestSearch(term: string) {
    this.searchService.setSelectedSearch(term);
  }

  logSearch() {
    console.log("logSearch(): ", this.value);
  }

  updateSearch(newSearch: string) {
    this.value = newSearch;
    this.searchService.setSelectedSearch(newSearch);
  }

}
