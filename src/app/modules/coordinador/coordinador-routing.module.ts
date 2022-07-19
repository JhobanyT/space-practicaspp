import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavCoordinadorComponent } from './components/nav-coordinador/nav-coordinador.component';
import { ConvenioComponent } from './components/convenio/convenio.component';

const routes: Routes = [
  { path: '', component: NavCoordinadorComponent, 
  children:[
    {
      path: '', component: ConvenioComponent,
      // children:[
      //   {
      //     path: '', component: InformacionProcedimientosComponent
      //   },
      //   {
      //     path: 'solicitud', component: InformacionProcedimientosComponent
      //   }
      // ]
      
    }
    // { path: 'solicitud', component: NavSecretariaComponent}
  ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinadorRoutingModule { }
