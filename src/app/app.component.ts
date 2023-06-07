import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CS2 Tactics';
  currentMap = "all";
  // when the current map changes, call my childs display method

  updateCurrentMap(mapName: string): void {
    this.currentMap = mapName;
    console.log("AppComponent currentMap is", this.currentMap);
  }
}
