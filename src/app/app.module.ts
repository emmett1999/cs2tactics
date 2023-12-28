import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NadeTileComponent } from './nade-tile/nade-tile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuideViewComponent } from './guide-view/guide-view.component';
import { NadePopupComponent } from './nade-popup/nade-popup.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { DummyComponent } from './dummy/dummy.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    NadeTileComponent,
    DashboardComponent,
    GuideViewComponent,
    NadePopupComponent,
    DummyComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule, MatToolbarModule, MatButtonModule, AppRoutingModule,
    MatCardModule, MatGridListModule, MatDialogModule, MatChipsModule,
    MatPaginatorModule, BrowserAnimationsModule, MatButtonToggleModule, MatInputModule, MatIconModule, FormsModule, MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
