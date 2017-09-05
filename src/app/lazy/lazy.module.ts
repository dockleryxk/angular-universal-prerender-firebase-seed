import { NgModule } from '@angular/core';
import { routing } from './lazy.routing';
import {LazyComponent} from './lazy.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    routing,
    SharedModule
  ],
  declarations: [LazyComponent]
})
export class LazyModule {}
