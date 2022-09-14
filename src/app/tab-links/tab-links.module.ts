import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabLinksPageRoutingModule } from './tab-links-routing.module';

import { TabLinksPage } from './tab-links.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabLinksPageRoutingModule,

  ],
  declarations: [TabLinksPage]
})
export class TabLinksPageModule {}
