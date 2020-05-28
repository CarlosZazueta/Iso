import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlPageRoutingModule } from './control-routing.module';

import { ControlPage } from './control.page';
import { ComponentsModule } from '../../components/components.module';
import { AddFilePage } from '../add-file/add-file.page';
import { AddFilePageModule } from '../add-file/add-file.module';

@NgModule({
  entryComponents: [
    AddFilePage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlPageRoutingModule,
    ComponentsModule,
    AddFilePageModule
  ],
  declarations: [ControlPage]
})
export class ControlPageModule {}
