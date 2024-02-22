import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NadeTileComponent } from './nade-tile/nade-tile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuideViewComponent } from './guide-view/guide-view.component';
import { DummyComponent } from './dummy/dummy.component';

const routes: Routes = [
  // TODO: get the routing to work. currently, the router is displaying an extra Dashboard component with no grenades and an empty paginator
{ path: 'mirage', component: DummyComponent},
{ path: 'overpass', component: DummyComponent},
{ path: 'nuke', component: DummyComponent},
{ path: 'inferno', component: DummyComponent},
{ path: 'ancient', component: DummyComponent},
{ path: 'vertigo', component: DummyComponent},
{ path: '', component: DummyComponent},
{ path: 'guides', component: GuideViewComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }