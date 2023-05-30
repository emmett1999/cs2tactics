import { Component, Input } from '@angular/core';

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
}