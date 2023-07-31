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
      return item.title.includes(searchTerm);
    });
    return eligileGrenades;

  }

  filterForNadeType(mapName: string, nadeTypes: string[]): Grenade[] {
    var filteredGrenades: Grenade[] = [];
    if(mapName == "mirage") {
      filteredGrenades = this.getMirage();
    } else if(mapName == "overpass") {
      filteredGrenades = this.getOverpass();
    } else if(mapName == "nuke") {
      filteredGrenades = this.getNuke();
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

    // console.log("Mirage grenades", nades);

    return nades;
  }

  getOverpass(): Grenade[] {
    const nades = GRENADES.filter(item => {
      return item.map === "overpass";
    })

    // console.log("Overpass grenades", nades);

    return nades;
  }

  getNuke(): Grenade[] {
    const nades = GRENADES.filter(item => {
      return item.map === "nuke";
    })

    // console.log("Nuke grenades", nades);

    return nades;
  }

}
