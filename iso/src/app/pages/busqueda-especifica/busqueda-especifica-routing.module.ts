import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusquedaEspecificaPage } from './busqueda-especifica.page';

const routes: Routes = [
  {
    path: '',
    component: BusquedaEspecificaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusquedaEspecificaPageRoutingModule {}
