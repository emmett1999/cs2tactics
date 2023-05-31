import { Component, OnInit } from '@angular/core';
import { Grenade } from '../grenade';
import { GrenadeService } from '../grenade.service';
import { AppRoutingModule } from '../app-routing.module';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    grenades: Grenade[] = [];

    constructor(private grenadeService: GrenadeService, private router: Router) {
      // I will want to subscribe to the router events. when the route changes, call the method to determine the route
    }

    getAllGrenades(): void {
      this.grenades = this.grenadeService.getAllGrenades();
    }

    ngOnInit(): void {
      this.displayMirage();
    }

    logRoute(): void {
      console.log("Current route ", this.router.url);
    }

    displayMirage(): void {
      this.grenades = this.grenadeService.getMirage();
      //console.log("Mirage route", this.route.url);
    }

    displayOverpass(): void {
      this.grenades = this.grenadeService.getOverpass();
      //console.log("Overpass route", this.route.url);
    }

    displayNuke(): void {
      this.grenades = this.grenadeService.getNuke();
      //console.log("Nuke route", this.route.url);
    }
}
