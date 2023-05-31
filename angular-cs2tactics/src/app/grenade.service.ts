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

  getMirage(): Grenade[] {
    const nades = GRENADES.filter(item => {
      return item.map === "mirage";
    })

    console.log("Mirage grenades", nades);

    return nades;
  }

  getOverpass(): Grenade[] {
    const nades = GRENADES.filter(item => {
      return item.map === "overpass";
    })

    console.log("Overpass grenades", nades);

    return nades;
  }

  getNuke(): Grenade[] {
    const nades = GRENADES.filter(item => {
      return item.map === "nuke";
    })

    console.log("Nuke grenades", nades);

    return nades;
  }

}
