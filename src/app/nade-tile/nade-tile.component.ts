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

    videoLoaded = false;
    // videoStarted = false;

    constructor(public dialog: MatDialog){}

    ngAfterViewInit() {
      this.videoPlayer.nativeElement.onloadeddata = (event) => {
          console.log('Video data is loaded for ', this.grenade.title);
          this.videoLoaded = true;
      };
  
      // this.videoPlayer.nativeElement.onplaying = (event) => {
      //   console.log('Video data is no longer paused for ', this.grenade.title);
      //   this.videoStarted = true;
      // };
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

  // export interface Grenade {
  //   title: string;
  //   startingLocation: string;
  //   nadeType: string;
  //   throwType: string;
  //   description: string;
  //   map: string;
  //   contentUrl: string;
  // }