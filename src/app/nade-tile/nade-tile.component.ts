import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NadePopupComponent } from '../nade-popup/nade-popup.component';
import { Grenade } from '../grenade';

@Component({
  selector: 'nade-tile',
  templateUrl: './nade-tile.component.html',
  styleUrls: ['./nade-tile.component.css']
})
export class NadeTileComponent {
    @Input() grenade: Grenade;

    constructor(public dialog: MatDialog){}

    openDialog() {
      this.dialog.open(NadePopupComponent, {
        // TODO: Make the size of the dialog popup based on the screen size
        height: '600px',
        width: '854px',
        data: {
          title: this.grenade.title,
          startingLocation: this.grenade.startingLocation,
          nadeType: this.grenade.nadeType,
          throwType: this.grenade.throwType,
          description: this.grenade.description,
          map: this.grenade.map,
          contentUrl: this.grenade.contentUrl,
        },
        // panelClass: 'dialog-panel'
      });
    }
}

  // export interface Grenade {
  //   title: string;
  //   startingLocation: string;
  //   nadeType: string;
  //   throwType: string;
  //   description: string;
  //   map: string;
  //   contentUrl: string;
  // }