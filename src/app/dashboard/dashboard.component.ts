import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { Grenade } from '../grenade';
import { GrenadeService } from '../grenade.service';
import { AppRoutingModule } from '../app-routing.module';
import { ActivatedRoute } from '@angular/router';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { SimpleChanges } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


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
    // pageSizeOptions: number[] = [10, 20, 40];

    index: number = 0;

    currentRoute: string;

    @ViewChild('paginator', { static: true }) paginator: MatPaginator;

    constructor(private grenadeService: GrenadeService, private router: Router) {
      this.currentRoute = "";
      this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
          // Show progress spinner or progress bar
          console.log('Route change detected');
          console.log('URL: ', event.url)
        }
      });
    }

    ngOnInit(): void {
      console.log("ngOnInit() called");
      this.index = 0;
      this.onChanges();
      // this.paginator.firstPage();
    }

    // ngAfterViewInit(): void {
    //   console.log("ngAfterViewInit() called");
    //   console.log("Paginator object: ", this.paginator);
    //   this.paginator.firstPage();
    //   // this.paginator.pageIndex = 2;
    // }

    OnPageChange(event: PageEvent){
      let startIndex = event.pageIndex * event.pageSize;
      let endIndex = startIndex + event.pageSize;
      if(endIndex > this.grenadeListLength){
        endIndex = this.grenadeListLength;
        startIndex = endIndex - event.pageSize;
      }
      this.pagedGrenades = this.grenades.slice(startIndex, endIndex);
      console.log("Start index: ", startIndex);
      console.log("End index: ", endIndex);
      // console.log("Paged grenades: ", this.pagedGrenades);
    }

    ngOnChanges(changes: SimpleChanges) {
      console.log("ngOnChanges() called");
      this.onChanges();
      // console.log("Paginator object: ", this.paginator);
      // console.log("Calling paginator.firstPage()");
      

  }

    onChanges(): void {
      this.updateGrenadesForMap();
      this.updateGrenadesForFilter();
      this.updateGrenadesForSide();
      // setup paginator
      this.resetPaginator();
      console.log("Dashboard: selectedMap is ", this.selectedMap);
      console.log("Dashboard: selectedSide is ", this.selectedSide);
      console.log("Dashboard: selected filters is ", this.selectedFilters);
      // console.log("Paged grenades: ", this.pagedGrenades);
      // console.log("changes", changes);
    }

    resetPaginator() : void {
      this.index = 0;
      this.paginator.firstPage();
      this.grenadeListLength = this.grenades.length;
      this.resetPagedGrenades();
    }

    resetPagedGrenades() : void {
      let endIndex = this.index+this.pageSize;
      if(endIndex > this.grenadeListLength) {
        endIndex = this.grenadeListLength;
      }

      this.pagedGrenades = this.grenades.slice(this.index, endIndex);
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
