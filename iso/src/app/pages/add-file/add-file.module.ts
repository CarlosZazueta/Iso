import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFilePageRoutingModule } from './add-file-routing.module';

import { AddFilePage } from './add-file.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFilePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddFilePage]
})
export class AddFilePageModule {}
