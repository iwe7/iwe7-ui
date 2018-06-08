import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
export const NgModules = [
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule
];

@NgModule({
    exports: [
        ...NgModules
    ]
})
export class Iwe7NgModule { }
