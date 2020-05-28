import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFilePage } from './add-file.page';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AddFilePage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [RouterModule],
})
export class AddFilePageRoutingModule {}
