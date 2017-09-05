import {NgModule} from '@angular/core';
import {AppModule} from './app.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScrollService} from './providers/scroll.service';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppModule
  ],
  providers: [
    ScrollService
  ],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {}
