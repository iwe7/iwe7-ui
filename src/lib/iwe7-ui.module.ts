import { Iwe7BoxModule } from 'iwe7-box';
import { Iwe7SquareModule } from 'iwe7-square';
import { Iwe7SwiperModule } from 'iwe7-swiper';
import { Iwe7BetterScrollModule } from 'iwe7-better-scroll';
import { Iwe7FlexBoxModule } from 'iwe7-flex';
import { Iwe7AbcModule } from 'iwe7-abc';

import { NgModule } from '@angular/core';
import { MatDialogModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  exports: [
    Iwe7BetterScrollModule,
    Iwe7SwiperModule,
    Iwe7SquareModule,
    Iwe7FlexBoxModule,
    Iwe7AbcModule,
    Iwe7BoxModule,
    MatDialogModule, 
    MatIconModule, 
    MatButtonModule
  ]
})
export class Iwe7UiModule { }
