import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewHeroPageRoutingModule } from './view-hero-routing.module';

import { ViewHeroPage } from './view-hero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewHeroPageRoutingModule
  ],
  declarations: [ViewHeroPage]
})
export class ViewHeroPageModule {}
