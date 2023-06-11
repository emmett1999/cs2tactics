import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NadeTileComponent } from './nade-tile/nade-tile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuideViewComponent } from './guide-view/guide-view.component';
import { NadePopupComponent } from './nade-popup/nade-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    NadeTileComponent,
    DashboardComponent,
    GuideViewComponent,
    NadePopupComponent
  ],
  imports: [
    BrowserModule, MatToolbarModule, MatButtonModule, AppRoutingModule, MatCardModule, MatGridListModule, MatDialogModule, MatChipsModule, MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
