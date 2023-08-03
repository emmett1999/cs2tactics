import { Injectable } from '@angular/core';
import { GRENADES } from './grenade-list';
import { Grenade } from './grenade';

@Injectable({
  providedIn: 'root'
})
export class GrenadeService {

  constructor() { }

  getAllGrenades(): Grenade[] {
    return GRENADES;
  }

  filterForSearch(grenades: Grenade[], searchTerm: string): Grenade[] {
    //basic search algo
    const eligileGrenades = grenades.filter(item => {
      return item.title.includes(searchTerm) || item.startingLocation.includes(searchTerm);
    });
    return eligileGrenades;

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

}
