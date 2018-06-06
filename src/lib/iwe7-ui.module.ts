import { NgModule } from '@angular/core';

import { Iwe7BoxModule } from 'iwe7-box';
import { Iwe7SquareModule } from 'iwe7-square';
import { Iwe7SwiperModule } from 'iwe7-swiper';
import { Iwe7BetterScrollModule } from 'iwe7-better-scroll';
import { Iwe7FlexBoxModule } from 'iwe7-flex';
import { Iwe7AbcModule } from 'iwe7-abc';
export const Iwe7Modules = [
  Iwe7BetterScrollModule,
  Iwe7SwiperModule,
  Iwe7SquareModule,
  Iwe7FlexBoxModule,
  Iwe7AbcModule,
  Iwe7BoxModule,
];

import {
  MatDialogModule, MatIconModule,
  MatButtonModule, MatListModule,
  MatGridListModule, MatBadgeModule,
  MatTooltipModule, MatCardModule,
  MatDividerModule
} from '@angular/material';

export const MaterialModules = [
  MatDialogModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatBadgeModule,
  MatTooltipModule,
  MatCardModule,
  MatDividerModule,
];

import { ObserversModule } from '@angular/cdk/observers';
import { BidiModule } from '@angular/cdk/bidi';
import { A11yModule } from '@angular/cdk/a11y';
import { PortalModule } from '@angular/cdk/portal';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CdkStepperModule } from '@angular/cdk/stepper';
export const CDKModules = [
  ObserversModule,
  BidiModule,
  A11yModule,
  PortalModule,
  CdkTreeModule,
  CdkStepperModule
];

@NgModule({
  exports: [
    ...Iwe7Modules,
    ...MaterialModules,
    ...CDKModules
  ]
})
export class Iwe7UiModule { }
