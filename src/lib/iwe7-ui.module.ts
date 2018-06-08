import { Iwe7LayoutModule } from 'iwe7-layout';
import { Iwe7HairlineModule } from 'iwe7-hairline';
import { NgModule } from '@angular/core';
import { Iwe7BoxModule } from 'iwe7-box';
import { Iwe7SquareModule } from 'iwe7-square';
import { Iwe7SwiperModule } from 'iwe7-swiper';
import { Iwe7FlexBoxModule } from 'iwe7-flex';
import { Iwe7AbcModule } from 'iwe7-abc';
import { Iwe7TabbarModule } from 'iwe7-tabbar';
// import { Iwe7HairlineModule } from 'iwe7-hairline';

export const Iwe7Modules = [
  Iwe7SwiperModule,
  Iwe7SquareModule,
  Iwe7FlexBoxModule,
  Iwe7AbcModule,
  Iwe7BoxModule,
  Iwe7TabbarModule,
  Iwe7HairlineModule,
  Iwe7LayoutModule
];
// others

@NgModule({
  exports: [
    ...Iwe7Modules
  ]
})
export class Iwe7UiModule { }
