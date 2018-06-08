import { Iwe7OtherModule } from './iwe7-other.module';
import { Iwe7NgModule } from './iwe7-ng.module';
import { Iwe7MaterialModule } from './iwe7-material.module';
import { Iwe7CdkModule } from './iwe7-cdk.module';
import { Iwe7UiModule } from './iwe7-ui.module';

import { NgModule } from '@angular/core';
export const ComponentModules = [
    Iwe7UiModule,
    Iwe7CdkModule,
    Iwe7MaterialModule,
    Iwe7NgModule,
    Iwe7OtherModule
];

@NgModule({
    exports: [
        ...ComponentModules
    ],
})
export class Iwe7SharedModule { }
