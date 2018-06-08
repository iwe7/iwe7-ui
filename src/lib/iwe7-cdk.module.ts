
import { NgModule } from '@angular/core';
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
        ...CDKModules
    ]
})
export class Iwe7CdkModule { }
