import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnePageRoutingModule } from './one-routing.module';

import { OnePage } from './one.page';
import { PosterComponent } from '../components/poster/poster.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnePageRoutingModule,
    PosterComponent
  ],
  declarations: [OnePage, PosterComponent]
})
export class OnePageModule {}
