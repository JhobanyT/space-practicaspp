import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthModule } from './modules/auth/auth.module';
// import { EstudianteModule } from './modules/estudiante/estudiante.module';
import { SigninComponent } from './components/signin/signin.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SecretariaModule } from './modules/secretaria/secretaria.module';

const routes: Routes = [
  {
    path:'', component: SigninComponent
  },
  {
    path:'login', component: SigninComponent
  },
  {
    path:'home', component: DashboardComponent
  },
  // {
  //   path:'',
  //   loadChildren: () => import('@modules/auth/auth.module').then((m) => m.AuthModule)
  // },
  // {
  //   path:'auth',
  //   loadChildren: () => import('@modules/auth/auth.module').then((m) => m.AuthModule)
  // },
  {
    path:'estudiante',
    loadChildren: () => import('@modules/estudiante/estudiante.module').then((m) => m.EstudianteModule),
    canActivate: [AuthGuard]
  },
  {
    path:'secretaria',
    loadChildren: () => import('@modules/secretaria/secretaria.module').then((m) => m.SecretariaModule),
    canActivate: [AuthGuard]
  },
  {
    path:'coordinador',
    loadChildren: () => import('@modules/coordinador/coordinador.module').then((m) => m.CoordinadorModule),
    canActivate: [AuthGuard]
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
