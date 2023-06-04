import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Grenade } from '../grenade';

@Component({
  selector: 'app-nade-popup',
  templateUrl: './nade-popup.component.html',
  styleUrls: ['./nade-popup.component.css']
})
export class NadePopupComponent {
  constructor(
    public dialogRef: MatDialogRef<NadePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Grenade) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
