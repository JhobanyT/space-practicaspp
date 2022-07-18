import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinadorRoutingModule } from './coordinador-routing.module';
import { NavCoordinadorComponent } from './components/nav-coordinador/nav-coordinador.component';
import { ConvenioComponent } from './components/convenio/convenio.component';

import { SharedModule } from '@shared/shared.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NavCoordinadorComponent,
    ConvenioComponent
  ],
  imports: [
    CommonModule,
    CoordinadorRoutingModule,
    SharedModule,
    MatSliderModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    HttpClientModule,
  ]
})
export class CoordinadorModule { }
