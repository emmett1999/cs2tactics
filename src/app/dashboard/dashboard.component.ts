import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { Grenade } from '../grenade';
import { GrenadeService } from '../grenade.service';
import { Router, NavigationStart, NavigationEnd, Event } from '@angular/router';
import { SimpleChanges } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { SearchBarService } from '../search-bar.service';

// TODO: The selectedMaps should really be enums or some constant
// TODO: Many of the calls to onChanges() can probably be removed. When a class variable changes, onChanges() should get called (right?)

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnChanges {
    grenades: Grenade[] = [];
    
    @Input() selectedFilters: string[];
    //@Input() selectedGame: string;
    @Input() selectedSide: string;
    private selectedMap: string;
    private selectedSearch: string; // search bar variable
    
    /* paginator variables */
    @ViewChild('paginator', { static: true }) paginator: MatPaginator;
    private paginatorIndex: number = 0;
    numGrenades: number = 0;
    pageSize: number = 20;
    grenadesOnPage: Grenade[] = [];
    // TODO: add page size options
    // pageSizeOptions: number[] = [10, 20, 40];

    constructor(private grenadeService: GrenadeService, private searchBarService: SearchBarService, private router: Router) {
      /* When the route changes, update the map based on the url */
      this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
          console.log('DashboardComponent: Route change detected, new URL is: ', event.url);
          this.updateMapFromUrl(event.url);
        }
      });

      /* When search changes, call onChanges() with new search */
      this.searchBarService.getSelectedSearch().subscribe((val) => {
        this.selectedSearch = val;
        this.onChanges();
      });
    }

    ngOnInit(): void {
      console.log("ngOnInit() called");
      this.paginatorIndex = 0;
      this.onChanges();
    }

    ngOnChanges(changes: SimpleChanges) {
      console.log("ngOnChanges() called");
      this.onChanges();
    }

    onChanges(): void {
      this.updateGrenadesForMap();
      this.updateGrenadesForFilter();
      this.updateGrenadesForSide();
      this.updateGrenadesForSearch();
      //this.updateGrenadesForGame();
      this.defaultSort();
      this.resetPaginator();
      console.log("Dashboard: selectedSearch is ", this.selectedSearch);
      // console.log("Dashboard: selectedMap is ", this.selectedMap);
      // console.log("Dashboard: selectedSide is ", this.selectedSide);
      // console.log("Dashboard: selected filters is ", this.selectedFilters);
      // console.log("Dashboard: Paged grenades are: ", this.pagedGrenades);
    }

    updateGrenadesForMap(): void {
      console.log("Called updateGrenadesForMap(). MAP: ", this.selectedMap);
      if(this.selectedMap == "mirage") {
        this.setGrenadesMirage();
      } else if (this.selectedMap == "overpass") {
        this.setGrenadesOverpass();
      } else if (this.selectedMap == "nuke") {
        this.setGrenadesNuke();
      } else if (this.selectedMap == "inferno") {
        this.setGrenadesInferno();
      } else if (this.selectedMap == "ancient") {
        this.setGrenadesAncient();
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

    setGrenadesNuke(): void {
      this.grenades = this.grenadeService.getNuke();
    }

    setGrenadesInferno(): void {
      this.grenades = this.grenadeService.getInferno();
    }

    setGrenadesAncient(): void {
      this.grenades = this.grenadeService.getAncient();
    }

    updateGrenadesForFilter(): void {
      this.grenades = this.grenadeService.filterForNadeType(this.selectedMap, this.selectedFilters);
    }

    updateGrenadesForSide(): void {
      this.grenades = this.grenadeService.filterForSide(this.grenades, this.selectedSide);
    }

    // updateGrenadesForGame(): void {
    //   console.log("Called updateGrenadesForGame(). GAME: ", this.selectedGame);
    //   this.grenades = this.grenadeService.filterForGame(this.grenades, this.selectedGame);
    //   console.log("selectedGrenades: ", this.grenades.length)
    // }

    defaultSort(): void {
      this.grenades = this.grenadeService.defaultSort(this.grenades);
      console.log("Called Grenade service defaultSort()");
    }

    updateGrenadesForSearch(): void {
      this.grenades = this.grenadeService.filterForSearch(this.grenades, this.selectedSearch);
    }

    updateMapFromUrl(url: string): void {
      var newMap = this.getMapFromUrl(url);
      console.log('DashboardComponent: Map from url is: ', newMap);
      // TODO: this should be a static list
      if(["all","mirage","overpass","nuke","inferno","ancient"].includes(newMap)){
        this.selectedMap = newMap;
      } else {
        this.selectedMap = "all";
      }
      this.onChanges();
    }

    getMapFromUrl(url: string): string {
      var results = url.split("/");
      // console.log("URL split array results: ", results);
      var newMap = results[1];
      return newMap;
    }

    /* paginator functions */
    OnPageChange(event: PageEvent){
      let startIndex = event.pageIndex * event.pageSize;
      let endIndex = startIndex + event.pageSize;
      if(endIndex > this.numGrenades){
        endIndex = this.numGrenades;
        startIndex = endIndex - event.pageSize;
      }
      this.grenadesOnPage = this.grenades.slice(startIndex, endIndex);
    }

    resetPaginator() : void {
      this.paginatorIndex = 0;
      this.paginator.firstPage();
      this.numGrenades = this.grenades.length;
      this.resetPagedGrenades();
    }

    resetPagedGrenades() : void {
      let endIndex = this.paginatorIndex+this.pageSize;
      if(endIndex > this.numGrenades) {
        endIndex = this.numGrenades;
      }

      this.grenadesOnPage = this.grenades.slice(this.paginatorIndex, endIndex);
    }

}
