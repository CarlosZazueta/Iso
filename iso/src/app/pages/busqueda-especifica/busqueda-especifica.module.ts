import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusquedaEspecificaPageRoutingModule } from './busqueda-especifica-routing.module';

import { BusquedaEspecificaPage } from './busqueda-especifica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusquedaEspecificaPageRoutingModule
  ],
  declarations: [BusquedaEspecificaPage]
})
export class BusquedaEspecificaPageModule {}
