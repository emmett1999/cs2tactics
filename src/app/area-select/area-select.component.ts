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

  // TODO: create a service which holds the value of the selectedMap? and selectedArea. this will get wired into the dashboard component
  // TODO: 

  //@Input() selectedMap: string;
  @Input() selectedArea: string = "";
  public areas: Area[];
  public numDistinctAreas: number;
  private activeGrenades: Grenade[];

  constructor(private grenadeService: GrenadeService) {
    this.grenadeService.getActiveGrenades().subscribe((val) => {
      this.activeGrenades = val;
      this.ngOnChanges();
    });
  }


  ngOnInit(): void {
    this.ngOnChanges();
  }

  ngOnChanges(): void {

    const uniqueAreasSet = new Set(
      this.activeGrenades.map(grenade => ({ area: grenade.area, map: grenade.map }))
        .map(area => JSON.stringify(area))
    );

    this.areas = Array.from(uniqueAreasSet).map(area => JSON.parse(area));

    this.areas.sort((a, b) => a.map.localeCompare(b.map));

    this.numDistinctAreas = new Set(this.areas.map(area => area.map)).size;

    console.log("AreaSelectComponent: areas is: ", this.areas);
    console.log("AreaSelectComponent: number of grenades is: ", this.activeGrenades.length);
    console.log("AreaSelectComponent: numDistinctAreas is: ", this.numDistinctAreas);
    console.log("AreaSelectComponent: selectedArea is: ", this.selectedArea);
  }

  onSelectionChange(): void {
    console.log("AreaSelectComponent: selectedArea changed to ", this.selectedArea);
  }
  
}


