import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Areas } from '../area-map'
import { GrenadeService } from '../grenade.service';
import { Grenade } from '../grenade';

@Component({
  selector: 'app-area-select',
  templateUrl: './area-select.component.html',
  styleUrls: ['./area-select.component.css']
})
export class AreaSelectComponent implements OnChanges {

  // TODO: create a service which holds the value of the selectedMap? and selectedArea. this will get wired into the dashboard component
  // TODO: 

  @Input() selectedMap: string;
  @Input() selectedArea: string = "";urr
  public areas: string[];

  private potato: Grenade[];

  constructor(private grenadeService: GrenadeService) {
    this.grenadeService.getActiveGrenades().subscribe((val) => {
      this.potato = val;
      this.logPotato();
    });
  }

  logPotato(): void {
    console.log("POTATO VALUE: ", this.potato);
  }

  ngOnInit(): void {
    console.log("AreaSelectComponent: areas is: ", this.areas);
    console.log("AreaSelectComponent: selectedArea is: ", this.selectedArea);
    this.ngOnChanges();
  }

  ngOnChanges(): void {
    this.areas = MAP_AREAS[this.selectedMap];
    console.log("AreaSelectComponent: areas is: ", this.areas);
    console.log("AreaSelectComponent: selectedArea is: ", this.selectedArea);
  }

  onSelectionChange(): void {
    console.log("AreaSelectComponent: selectedArea changed to ", this.selectedArea);
  }
  
}


