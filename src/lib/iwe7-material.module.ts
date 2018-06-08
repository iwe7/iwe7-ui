
import { NgModule } from '@angular/core';

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
    MatSnackBarModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSortModule,
    MatExpansionModule
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
    MatSnackBarModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSortModule,
    MatExpansionModule
  ];
  

@NgModule({
    exports: [
        ...MaterialModules
    ]
})
export class Iwe7MaterialModule { }
