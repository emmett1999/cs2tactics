import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GrenadeService } from '../grenade.service';
import { Grenade } from '../grenade';
import { Area } from '../area';

@Component({
  selector: 'area-select',
  templateUrl: './area-select.component.html',
  styleUrls: ['./area-select.component.css']
})

export class AreaSelectComponent implements OnChanges {

  @Input() selectedMap: string;
  public selectedArea: string;
  public areas: Area[];
  public noneArea: Area = {area: "None", map: "None"};
  public numDistinctAreas: number;
  private activeGrenades: Grenade[] = [];
  
  constructor(private grenadeService: GrenadeService) {
    this.grenadeService.getActiveGrenades().subscribe((val) => {
      this.activeGrenades = val;
      this.determineArea();
    });
  }

  ngOnChanges(): void {
    console.log("AreaSelectComponent: ngOnChanges() has been called. Resetting selectedArea.");
    this.resetSelectSearch();
  }


  ngOnInit(): void {
    this.determineArea();
  }

  determineArea(): void {
    if(this.activeGrenades == null) {
      this.areas = [];
    } else {
      const uniqueAreasSet = new Set(
        this.activeGrenades.map(grenade => ({ area: grenade.area, map: grenade.map }))
          .map(area => JSON.stringify(area))
      );
  
      this.areas = Array.from(uniqueAreasSet).map(area => JSON.parse(area));
    }

    this.areas.sort((a, b) => a.map.localeCompare(b.map));

    this.numDistinctAreas = new Set(this.areas.map(area => area.map)).size;

    console.log("AreaSelectComponent: areas is: ", this.areas);
    console.log("AreaSelectComponent: numDistinctAreas is: ", this.numDistinctAreas);
  }

  onSelectionChange(): void {
    this.grenadeService.setSelectedArea({area: this.selectedArea, map: this.selectedMap});
  }

  resetSelectSearch(): void {
    this.grenadeService.setSelectedArea(this.noneArea);
  }
  
}


