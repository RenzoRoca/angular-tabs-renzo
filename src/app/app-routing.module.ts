import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapviewComponent } from './modules/mapview/mapview.component';
import { TableviewComponent } from './modules/tableview/tableview.component';
import { CubeviewComponent } from './modules/cubeview/cubeview.component';
import { OverviewComponent } from './modules/overview/overview.component';


const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'mapview', component: MapviewComponent },
  { path: 'tableview', component: TableviewComponent },
  { path: 'cubeview', component: CubeviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
