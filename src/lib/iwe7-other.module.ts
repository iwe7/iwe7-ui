
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
export const OthersModules = [
  InfiniteScrollModule
];
@NgModule({
    exports: [
        ...OthersModules
    ]
})
export class Iwe7OtherModule { }
