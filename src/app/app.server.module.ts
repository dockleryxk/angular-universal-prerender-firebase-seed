import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';
import {AppModule} from './app.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ScrollService} from './providers/scroll.service';
import {NoopScrollService} from './providers/noop-scroll.service';
import {BrowserModule} from '@angular/platform-browser';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';

@NgModule({
  imports: [
    // The AppServerModule should import your AppModule followed
    // by the ServerModule from @angular/platform-server.
    BrowserModule.withServerTransition({
      appId: 'example-universal'
    }),
    NoopAnimationsModule,
    ServerModule,
    ModuleMapLoaderModule,
    AppModule
  ],
  providers: [
    {provide: ScrollService, useClass: NoopScrollService}
  ],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [AppComponent]
})
export class AppServerModule {}
