import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  selectedSearch: BehaviorSubject<string>;

  constructor() {
    this.selectedSearch = new BehaviorSubject<string>("");
  }

  getSelectedSearch() : Observable<string>{
    return this.selectedSearch.asObservable();
  }

  setSelectedSearch(search: string) {
    this.selectedSearch.next(search);
    console.log("SearchBarService: selectedSearch updated to ", this.selectedSearch);
  }
}
