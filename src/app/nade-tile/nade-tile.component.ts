import { Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
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

    @ViewChild('videoPlayer') videoPlayer: ElementRef;

    // TODO?: I could use this property for adding a placeholder image before the video is loaded
    videoLoaded = false;

    constructor(public dialog: MatDialog){}

    /* This should fire after the video is loaded */
    ngAfterViewInit() {
      this.videoPlayer.nativeElement.onloadeddata = (event) => {
          console.log('Video data is loaded for ', this.grenade.title);
          this.videoLoaded = true;
      };
    }

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