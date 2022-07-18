import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { NavSecretariaComponent } from './components/nav-secretaria/nav-secretaria.component';

const routes: Routes = [
  { path: '', component: NavSecretariaComponent, 
  children:[
    {
      path: '', component: SolicitudComponent,
      // children:[
      //   {
      //     path: '', component: InformacionProcedimientosComponent
      //   },
      //   {
      //     path: 'solicitud', component: InformacionProcedimientosComponent
      //   }
      // ]
      
    },
    { path: 'solicitud', component: NavSecretariaComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretariaRoutingModule { }
