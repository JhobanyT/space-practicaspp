import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { NavSecretariaComponent } from './components/nav-secretaria/nav-secretaria.component';
import { VerificarSolicitudComponent } from './components/verificar-solicitud/verificar-solicitud.component';

const routes: Routes = [
  { path: '', component: NavSecretariaComponent, 
  children:[
    {
      path: '', component: SolicitudComponent,      
    },
    { path: 'solicitud', component: SolicitudComponent},
    { path: 'verificar', component: VerificarSolicitudComponent}
  ]
  },
  { path: 'secretaria', component: NavSecretariaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretariaRoutingModule { }
