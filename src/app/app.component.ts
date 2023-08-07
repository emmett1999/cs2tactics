import { Component } from '@angular/core';

// TODO: In the future, there should be different filters for each map based on location
// export const ALL_FILTERS: {[key: string]: string[]} = {
//   "all": [],
//   "mirage": ["tomato", "potato", "sandwich"],
//   "nuke": ["apple", "pear", "banana"],
//   "overpass": ["lemon", "lime", "pome"],
// };

// TODO: Also, these map filters should probably be their own type, or an enum or something

export const MAP_FILTERS = ["smoke", "flash", "molly", "he", "boost"];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentMap = "all";
  currentSide = "all";
  currentGame = "CSGO";
  currentGrenadesFilters = [];

  ngOnInit(): void {
    this.currentGrenadesFilters.push(...MAP_FILTERS);
  }
 
  updateCurrentSide(sideName: string): void {
    this.currentSide = sideName;
  }

  updateCurrentMap(mapName: string): void {
    this.currentMap = mapName;
    console.log("AppComponent currentMap is", this.currentMap);
  }

  updateCurrentGame(gameName: string): void {
    this.currentGame = gameName;
    console.log("AppComponent currentGame is", this.currentGame);
  }

  updateFilters(newFilter: string): void {
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
