import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteRoutingModule } from './estudiante-routing.module';
import { SolicitudListComponent } from './components/solicitud-list/solicitud-list.component';
import { SharedModule } from '@shared/shared.module';
import { InformacionHomeComponent } from './components/informacion-home/informacion-home.component';
import { InformacionProcedimientosComponent } from './components/informacion-procedimientos/informacion-procedimientos.component';
import { InformacionResponsabilidadesComponent } from './components/informacion-responsabilidades/informacion-responsabilidades.component';
import { InformacionDerechosComponent } from './components/informacion-derechos/informacion-derechos.component';
import { InformacionRequisitosComponent } from './components/informacion-requisitos/informacion-requisitos.component';
import { InformacionOtrosComponent } from './components/informacion-otros/informacion-otros.component';
import { NavEstudianteComponent } from './components/nav-estudiante/nav-estudiante.component';


import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ConvenioComponent } from './components/convenio/convenio.component';
import { SolicitudAddComponent } from './components/solicitud-add/solicitud-add.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { PracticaComponent } from './components/practica/practica.component';
import { InformeComponent } from './components/informe/informe.component';

@NgModule({
  declarations: [
    SolicitudListComponent,
    InformacionHomeComponent,
    InformacionProcedimientosComponent,
    InformacionResponsabilidadesComponent,
    InformacionDerechosComponent,
    InformacionRequisitosComponent,
    InformacionOtrosComponent,
    NavEstudianteComponent,
    ConvenioComponent,
    SolicitudAddComponent,
    SolicitudComponent,
    PracticaComponent,
    InformeComponent,
  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule,
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
export class EstudianteModule { }
