import { Iwe7BoxModule } from 'iwe7-box';
import { Iwe7SquareModule } from 'iwe7-square';
import { Iwe7SwiperModule } from 'iwe7-swiper';
import { Iwe7BetterScrollModule } from 'iwe7-better-scroll';
import { NgModule } from '@angular/core';
import { MatDialogModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  exports: [
    Iwe7BetterScrollModule,
    Iwe7SwiperModule,
    Iwe7SquareModule,
    Iwe7BoxModule,
    MatDialogModule, 
    MatIconModule, 
    MatButtonModule
  ]
})
export class Iwe7UiModule { }
