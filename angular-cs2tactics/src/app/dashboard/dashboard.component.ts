import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Grenade } from '../grenade';
import { GrenadeService } from '../grenade.service';
import { AppRoutingModule } from '../app-routing.module';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnChanges {
    grenades: Grenade[] = [];

    @Input() selectedMap;

    constructor(private grenadeService: GrenadeService) {

    }

    ngOnChanges(changes: SimpleChanges) {
      // changes.prop contains the old and the new value...
      this.determineDisplay();
      console.log("selectedMap is ", this.selectedMap);
      console.log("changes", changes);
    }

    ngOnInit(): void {
      this.displayAllGrenades;
    }

    determineDisplay(): void {
      console.log("selectedMap: " + this.selectedMap);
      if(this.selectedMap == "mirage") {
        this.displayMirage();
      } else if (this.selectedMap == "overpass") {
        this.displayOverpass();
      } else if (this.selectedMap == "nuke") {
        this.displayNuke();
      } else if (this.selectedMap == "all") {
        this.displayAllGrenades();
      }

      console.log("Grenades value: ", this.grenades);
    }

    displayAllGrenades(): void {
      this.grenades = this.grenadeService.getAllGrenades();
    }

    displayMirage(): void {
      this.grenades = this.grenadeService.getMirage();
    }

    displayOverpass(): void {
      this.grenades = this.grenadeService.getOverpass();
    }

    displayNuke(): void {
      this.grenades = this.grenadeService.getNuke();
    }
}
