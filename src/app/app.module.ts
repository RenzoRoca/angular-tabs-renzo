import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './modules/overview/overview.component';
import { MapviewComponent } from './modules/mapview/mapview.component';
import { TableviewComponent } from './modules/tableview/tableview.component';
import { CubeviewComponent } from './modules/cubeview/cubeview.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    MapviewComponent,
    TableviewComponent,
    CubeviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
