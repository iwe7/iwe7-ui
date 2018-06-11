import { BetterCoreModule } from '../../../iwe7-better-scroll/src/public_api';
import { Iwe7LayoutModule } from '../../../iwe7-layout/src/public_api';
import { Iwe7NavbarModule } from '../../../iwe7-navbar/src/public_api';
import { Iwe7HairlineModule } from '../../../iwe7-hairline/src/public_api';
import { NgModule } from '@angular/core';
import { Iwe7BoxModule } from '../../../iwe7-box/src/public_api';
import { Iwe7SquareModule } from '../../../iwe7-square/src/public_api';
import { Iwe7SwiperModule } from '../../../iwe7-swiper/src/public_api';
import { Iwe7FlexBoxModule } from '../../../iwe7-flex/src/public_api';
import { Iwe7AbcModule } from '../../../iwe7-abc/src/public_api';
import { Iwe7TabbarModule } from '../../../iwe7-tabbar/src/public_api';

import { Iwe7HammerModule } from 'iwe7-hammer';
import { Iwe7PickerModule } from 'iwe7-picker';
import { Iwe7PickerTimeModule } from 'iwe7-picker-time';
import { Iwe7PickerDateModule } from 'iwe7-picker-date';
import { Iwe7ToolbarModule } from 'iwe7-toolbar';

export const Iwe7Modules = [
  Iwe7SwiperModule,
  Iwe7SquareModule,
  Iwe7FlexBoxModule,
  Iwe7AbcModule,
  Iwe7BoxModule,
  Iwe7TabbarModule,
  Iwe7HairlineModule,
  Iwe7LayoutModule,
  Iwe7HammerModule,
  BetterCoreModule,
  Iwe7PickerModule,
  Iwe7PickerTimeModule,
  Iwe7PickerDateModule,
  Iwe7ToolbarModule,
  Iwe7NavbarModule
];

// others

@NgModule({
  imports: [
    ...Iwe7Modules
  ],
  exports: [
    ...Iwe7Modules
  ]
})
export class Iwe7TestModule { }
