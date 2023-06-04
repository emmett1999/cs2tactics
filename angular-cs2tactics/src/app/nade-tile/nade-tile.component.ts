import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NadePopupComponent } from '../nade-popup/nade-popup.component';

@Component({
  selector: 'nade-tile',
  templateUrl: './nade-tile.component.html',
  styleUrls: ['./nade-tile.component.css']
})
export class NadeTileComponent {
    @Input() title: string;
    @Input() type: string;
    @Input() map: string;
    @Input() contentUrl: string;

    constructor(public dialog: MatDialog){}

    openDialog() {
      this.dialog.open(NadePopupComponent, {
        data: {
          animal: 'panda',
        },
      });
    }
}