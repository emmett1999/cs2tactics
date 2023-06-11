import { Component } from '@angular/core';

export const ALL_FILTERS: {[key: string]: string[]} = {
  "all": [],
  "mirage": ["tomato", "potato", "sandwich"],
  "nuke": ["apple", "pear", "banana"],
  "overpass": ["lemon", "lime", "pome"],
};

export const MAP_FILTERS = ["smoke", "flash", "molly", "he", "boost"];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CS2 Tactics';
  currentMap = "all";
  currentSide = "all";
  currentGrenadesFilters = [];
  availableGrenadeFilters = [];

  ngOnInit(): void {
    this.currentGrenadesFilters.push(...MAP_FILTERS);
    this.availableGrenadeFilters.push(...MAP_FILTERS);
  }
 
  updateCurrentSide(sideName: string): void {
    this.currentSide = sideName;
  }

  updateCurrentMap(mapName: string): void {
    this.currentMap = mapName;
    console.log("AppComponent currentMap is", this.currentMap);
    
  }

  updateFilter(newFilter: string) : void {
    console.log("ALL filters before", ALL_FILTERS)

    if(this.currentGrenadesFilters.includes(newFilter)){
      const index = this.currentGrenadesFilters.indexOf(newFilter);
      this.currentGrenadesFilters.splice(index, 1);
    } else {
      this.currentGrenadesFilters.push(newFilter);
    }

    this.currentGrenadesFilters = [...this.currentGrenadesFilters];
    console.log("AppComponent currentFilters is", this.currentGrenadesFilters);
  }
}
