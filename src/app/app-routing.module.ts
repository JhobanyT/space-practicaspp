import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './modules/auth/auth.module';
import { EstudianteModule } from './modules/estudiante/estudiante.module';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('@modules/auth/auth.module').then((m) => m.AuthModule)
  },
  // {
  //   path:'auth',
  //   loadChildren: () => import('@modules/auth/auth.module').then((m) => m.AuthModule)
  // },
  {
    path:'estudiante',
    loadChildren: () => import('@modules/estudiante/estudiante.module').then((m) => m.EstudianteModule)
  },
  
  // {
  //   path:'**', component: Page404Component;
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
