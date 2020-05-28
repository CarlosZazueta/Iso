import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFilePageRoutingModule } from './add-file-routing.module';

import { AddFilePage } from './add-file.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFilePageRoutingModule,
  ],
  declarations: [AddFilePage]
})
export class AddFilePageModule {}
