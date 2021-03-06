import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login-page', pathMatch: 'full' },
  {
    path: 'login-page',
    loadChildren: () => import('./pages/login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'control',
    loadChildren: () => import('./pages/control/control.module').then( m => m.ControlPageModule)
  },  {
    path: 'busqueda-especifica',
    loadChildren: () => import('./pages/busqueda-especifica/busqueda-especifica.module').then( m => m.BusquedaEspecificaPageModule)
  },
  {
    path: 'add-file',
    loadChildren: () => import('./pages/add-file/add-file.module').then( m => m.AddFilePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
