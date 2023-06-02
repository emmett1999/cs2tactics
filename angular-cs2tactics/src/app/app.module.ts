import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NadeTileComponent } from './nade-tile/nade-tile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuideViewComponent } from './guide-view/guide-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NadeTileComponent,
    DashboardComponent,
    GuideViewComponent
  ],
  imports: [
    BrowserModule, MatToolbarModule, MatButtonModule, AppRoutingModule, MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
