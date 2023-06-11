import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Grenade } from '../grenade';
import { GrenadeService } from '../grenade.service';
import { AppRoutingModule } from '../app-routing.module';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnChanges {
    grenades: Grenade[] = [];
    pagedGrenades: Grenade[] = [];

    @Input() selectedMap: string;
    @Input() selectedFilters: string[];
    @Input() selectedSide: string;
    
    // paginator variables
    grenadeListLength: number = 0;
    pageSize: number = 20;
    pageSizeOptions: number[] = [10, 20, 40];

    constructor(private grenadeService: GrenadeService) {}

    ngOnInit(): void {
      this.grenadeListLength = this.grenades.length;
      this.updateGrenadesForMap();
    }

    OnPageChange(event: PageEvent){
      let startIndex = event.pageIndex * event.pageSize;
      let endIndex = startIndex + event.pageSize;
      if(endIndex > this.grenadeListLength){
        endIndex = this.grenadeListLength;
      }
      this.pagedGrenades = this.grenades.slice(startIndex, endIndex);
      console.log("Start index: ", startIndex);
      console.log("End index: ", endIndex);
      console.log("Paged grenades: ", this.pagedGrenades);
    }

    ngOnChanges(changes: SimpleChanges) {
      // changes.prop contains the old and the new value...
      this.updateGrenadesForMap();
      this.updateGrenadesForFilter();
      this.updateGrenadesForSide();
      console.log("Dashboard: selectedMap is ", this.selectedMap);
      console.log("Dashboard: selectedSide is ", this.selectedSide);
      console.log("Dashboard: selected filters is ", this.selectedFilters);
      // console.log("changes", changes);
    }

    updateGrenadesForSide() : void {
      this.grenades = this.grenadeService.filterForSide(this.grenades, this.selectedSide);
    }

    updateGrenadesForFilter() : void{
      this.grenades = this.grenadeService.filterForNadeType(this.selectedMap, this.selectedFilters);
    }

    updateGrenadesForMap(): void {
      if(this.selectedMap == "mirage") {
        this.setGrenadesMirage();
      } else if (this.selectedMap == "overpass") {
        this.setGrenadesOverpass();
      } else if (this.selectedMap == "nuke") {
        this.setDisplayNuke();
      } else if (this.selectedMap == "all") {
        this.setGrenadesAll();
      }
    }

    setGrenadesAll(): void {
      this.grenades = this.grenadeService.getAllGrenades();
    }

    setGrenadesMirage(): void {
      this.grenades = this.grenadeService.getMirage();
    }

    setGrenadesOverpass(): void {
      this.grenades = this.grenadeService.getOverpass();
    }

    setDisplayNuke(): void {
      this.grenades = this.grenadeService.getNuke();
    }
}
