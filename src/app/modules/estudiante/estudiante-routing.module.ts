import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionHomeComponent } from './components/informacion-home/informacion-home.component';
import { InformacionProcedimientosComponent } from './components/informacion-procedimientos/informacion-procedimientos.component';
import { InformacionResponsabilidadesComponent } from './components/informacion-responsabilidades/informacion-responsabilidades.component';
import { InformacionDerechosComponent } from './components/informacion-derechos/informacion-derechos.component';
import { InformacionRequisitosComponent } from './components/informacion-requisitos/informacion-requisitos.component';
import { InformacionOtrosComponent } from './components/informacion-otros/informacion-otros.component';
import { NavEstudianteComponent } from './components/nav-estudiante/nav-estudiante.component';
import { ConvenioComponent } from './components/convenio/convenio.component';
import { SolicitudListComponent } from './components/solicitud-list/solicitud-list.component';
import { SolicitudAddComponent } from './components/solicitud-add/solicitud-add.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';

const routes: Routes = [
  {
    path: '', component: NavEstudianteComponent,
    children:[
      {
        path: '', component: InformacionHomeComponent,
        children:[
          {
            path: '', component: InformacionProcedimientosComponent
          },
          {
            path: 'informacion', component: InformacionProcedimientosComponent
          },
          {
            path: 'prodedimientos', component: InformacionProcedimientosComponent
          },
          {
            path: 'responsabilidades', component: InformacionResponsabilidadesComponent
          },
          {
            path: 'derechos', component: InformacionDerechosComponent
          },
          {
            path: 'requisitos', component: InformacionRequisitosComponent
          },
          {
            path: 'otros', component: InformacionOtrosComponent
          },
        ],
      },
      {
        path: 'convenios', component: ConvenioComponent
      },
      // {
      //   path: 'solicitud', component: SolicitudComponent,
      //   children:[
      //     {
      //       path: '', component: SolicitudListComponent,
      //     },
      {
        path: 'solicitudlist', component: SolicitudListComponent,
      },
      {
        path: 'solicitudadd', component: SolicitudAddComponent,
      },
      //   ]
      // },
    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
