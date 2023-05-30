import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NadeTileComponent } from './nade-tile/nade-tile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuideViewComponent } from './guide-view/guide-view.component';

const routes: Routes = [
  { path: 'mirage', component: DashboardComponent},
  { path: 'overpass', component: DashboardComponent },
  { path: 'nuke', component: DashboardComponent },
  { path: 'guides', component: GuideViewComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }