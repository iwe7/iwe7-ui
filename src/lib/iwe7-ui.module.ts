import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
export const NgModules = [
  ReactiveFormsModule,
  FormsModule
];
import { Iwe7BoxModule } from 'iwe7-box';
import { Iwe7SquareModule } from 'iwe7-square';
import { Iwe7SwiperModule } from 'iwe7-swiper';
import { Iwe7FlexBoxModule } from 'iwe7-flex';
import { Iwe7AbcModule } from 'iwe7-abc';
export const Iwe7Modules = [
  Iwe7SwiperModule,
  Iwe7SquareModule,
  Iwe7FlexBoxModule,
  Iwe7AbcModule,
  Iwe7BoxModule,
];

import {
  MatDialogModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatGridListModule,
  MatBadgeModule,
  MatTooltipModule,
  MatCardModule,
  MatDividerModule,
  MatTabsModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatNativeDateModule,
  MatStepperModule,
  MatTreeModule,
  MatSnackBarModule
} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
export const MaterialModules = [
  MatDialogModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatBadgeModule,
  MatTooltipModule,
  MatCardModule,
  MatDividerModule,
  MatTabsModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  MatStepperModule,
  MatGridListModule,
  MatTreeModule,
  MatSnackBarModule
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
    ...NgModules,
    ...Iwe7Modules,
    ...MaterialModules,
    ...CDKModules
  ]
})
export class Iwe7UiModule { }
