import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LazyComponent} from './lazy.component';

const routes: Routes = [
  { path: '', component: LazyComponent, pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
