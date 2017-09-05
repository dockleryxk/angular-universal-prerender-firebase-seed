import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  {path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
  {path: '', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false,  // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
