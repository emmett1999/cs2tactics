import { Injectable } from '@angular/core';
import { GRENADES } from './grenade-list';
import { Grenade } from './grenade';
import { BehaviorSubject, Observable } from 'rxjs';
import { Area } from './area';

@Injectable({
  providedIn: 'root'
})
export class GrenadeService {

  activeGrenades: BehaviorSubject<Grenade[]>;
  selectedArea: BehaviorSubject<Area>;

  public noneArea: Area = {area: "None", map: "None"};

  constructor() {
    this.activeGrenades = new BehaviorSubject<Grenade[]>(null);
    this.selectedArea = new BehaviorSubject<Area>(this.noneArea);
  }

  getActiveGrenades(): Observable<Grenade[]> {
    return this.activeGrenades.asObservable();
  }

  setActiveGrenades(grenades: Grenade[]): void {
    this.activeGrenades.next(grenades);
    console.log("GrenadeService: activeGrenades updated to ", this.activeGrenades);
  }

  getSelectedArea(): Observable<Area> {
      console.log("GET SELECTED AREA VALUE: ", this.selectedArea);
      return this.selectedArea.asObservable();
  }

  setSelectedArea(area: Area): void{
    console.log("GrenadeService: THE VALUE GETTING PASSED TO ME IS ", area);
    this.selectedArea.next(area);
  
  }

  getAllGrenades(): Grenade[] {
    return GRENADES;
  }

  defaultSort(grenades: Grenade[]): Grenade[] {
    var someGrenades = grenades.sort(function(a, b) {
      if (a.startingLocation < b.startingLocation) {
        return -1;
      }
      if (a.startingLocation > b.startingLocation) {
        return 1;
      }
      return 0;
    })

    return someGrenades;
  }

  filterForSearch(grenades: Grenade[], searchTerm: string): Grenade[] {
    var lowerCaseSearch = searchTerm.toLocaleLowerCase();
    //basic search algo
    const eligileGrenades = grenades.filter(item => {
      return item.title.toLocaleLowerCase().includes(lowerCaseSearch) || item.startingLocation.toLocaleLowerCase().includes(lowerCaseSearch);
    });
    return eligileGrenades;

  }

  resetSelectedSearch(): void {
    
  }

  // TODO: the maps should be constants
  filterForNadeType(mapName: string, nadeTypes: string[]): Grenade[] {
    var filteredGrenades: Grenade[] = [];
    if(mapName == "mirage") {
      filteredGrenades = this.getMirage();
    } else if(mapName == "overpass") {
      filteredGrenades = this.getOverpass();
    } else if(mapName == "nuke") {
      filteredGrenades = this.getNuke();
    } else if(mapName == "inferno") {
      filteredGrenades = this.getInferno();
    } else if (mapName == "ancient") {
      filteredGrenades = this.getAncient();
    } else if(mapName == "all") {
      filteredGrenades = GRENADES;
    }

    const nades = filteredGrenades.filter(item => {
      return this.stringContainsOneListItem(item.nadeType, nadeTypes)
    })

    return nades;
  }

  filterForSide(grenades: Grenade[], side: string) : Grenade[] {
    if(side == "all") {
      return grenades;
    }
    const eligileGrenades = grenades.filter(item => {
      return item.side == "all" || item.side == side;
    })

    return eligileGrenades;
  }

  filterForArea(grenades: Grenade[], area: Area) : Grenade[] {
    console.log("GrenadeService area passed into filterForArea(): ", area);
    console.log("GrenadeService grenades passed into filterForArea(): ", grenades);
    //console.log("GrenadeService area.area passed into filterForArea(): ", area.area);
    if(area.area === "None") {
      console.log("WHY IS THIS SHIT NOT GETTING CALLED?")
      return grenades;
    } else {
      const eligileGrenades = grenades.filter(item => {
        return item.area == area.area; // && item.map == area.map
      })
      console.log("GrenadeService grenades after filterForArea()", eligileGrenades);
      return eligileGrenades;
    }
  }

  stringContainsOneListItem(target: string, filters: string[]) : boolean{
    for (var i = 0; i < filters.length; i++) {
      if(target.includes(filters[i])) {
        return true;
      }
    }
    return false;
  }

  getMirage(): Grenade[] {
    const nades = GRENADES.filter(item => {
      return item.map === "mirage";
    })

    return nades;
  }

  getOverpass(): Grenade[] {
    const nades = GRENADES.filter(item => {
      return item.map === "overpass";
    })

    return nades;
  }

  getNuke(): Grenade[] {
    const nades = GRENADES.filter(item => {
      return item.map === "nuke";
    })

    return nades;
  }

  getInferno(): Grenade[] {
    const nades = GRENADES.filter(item => {
      return item.map === "inferno";
    })

    return nades;
  }

  getAncient(): Grenade[] {
    const nades = GRENADES.filter(item => {
      return item.map === "ancient";
    })

    return nades;
  }

}
