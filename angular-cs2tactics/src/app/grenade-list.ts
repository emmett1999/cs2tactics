import { Grenade } from "./grenade";

export const GRENADES: Grenade[] = [
    { id: "overpass_a_execute_combo_from_short", title: "A execute nades", startingLocation: "divider", nadeType: "smoke, molly, flash", 
    throwType: "normal, jump", description: "Use this to execute A.", map: "overpass", contentUrl: "https://streamable.com/l/w4z08t/mp4.mp4"},
    { id: "overpass_smoke_bank_from_outside_connector", title: "Smoke bank", startingLocation: "outside connector", nadeType: "smoke", 
    throwType: "jump", description: "", map: "overpass", contentUrl: "https://streamable.com/l/3e0k0p/mp4.mp4"},
    { id: "overpass_anti_eco_a_utility", title: "Anti-eco utility for A", startingLocation: "CT spawn", nadeType: "molly, flash", 
    throwType: "normal, jump", description: "", map: "overpass", contentUrl: "https://streamable.com/l/jskaxw/mp4.mp4"},
    { id: "overpass_molly_toxic_for_real", title: "Molly toxic", startingLocation: "canals", nadeType: "molly", 
    throwType: "forward jump", description: "This is a forward+jump throw.", map: "overpass", contentUrl: "https://streamable.com/l/177ygl/mp4.mp4"},
    // { id: "XXXXX", title: "XXXXX", startingLocation: "XXXXXX", nadeType: "XXXXXXX", 
    // throwType: "XXXXX", description: "", map: "XXXXX", contentUrl: "XXXXXXX"},
    // { id: "XXXXX", title: "XXXXX", startingLocation: "XXXXXX", nadeType: "XXXXXXX", 
    // throwType: "XXXXX", description: "", map: "XXXXX", contentUrl: "XXXXXXX"},


    // { id: "XXXXX", title: "XXXXX", startingLocation: "XXXXXX", nadeType: "XXXXXXX", 
    // throwType: "XXXXX", description: "", map: "XXXXX", contentUrl: "XXXXXXX"},

    { id: "", title: "Smoke window", startingLocation: "T spawn", nadeType: "flash", 
    throwType: "", description: "Lorem ipsum yada yada", map: "overpass", contentUrl: "https://streamable.com/l/w4z08t/mp4.mp4"},
    { id: "", title: "Smoke window", startingLocation: "T spawn", nadeType: "smoke", 
    throwType: "", description: "Lorem ipsum yada yada", map: "overpass", contentUrl: "https://streamable.com/l/w4z08t/mp4.mp4"},
    { id: "", title: "Smoke window", startingLocation: "T spawn", nadeType: "flash", 
    throwType: "", description: "Lorem ipsum yada yada", map: "mirage", contentUrl: "https://streamable.com/l/w4z08t/mp4.mp4"},
    { id: "", title: "Smoke window", startingLocation: "T spawn", nadeType: "smoke", 
    throwType: "", description: "Lorem ipsum yada yada", map: "mirage", contentUrl: "https://streamable.com/l/w4z08t/mp4.mp4"},
    { id: "", title: "Smoke window", startingLocation: "T spawn", nadeType: "smoke", 
    throwType: "", description: "Lorem ipsum yada yada", map: "mirage", contentUrl: "https://streamable.com/l/w4z08t/mp4.mp4"},
]

  // export interface Grenade {
  //   title: string;
  //   startingLocation: string;
  //   nadeType: string;
  //   throwType: string;
  //   description: string;
  //   map: string;
  //   contentUrl: string;
  // }