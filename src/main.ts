import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import "hammerjs";
import {AppBrowserModule} from './app/app.browser.module';

if (environment.production) {
  enableProdMode();
}

export function main() {
  platformBrowserDynamic().bootstrapModule(AppBrowserModule);
}

document.addEventListener('DOMContentLoaded', main, false);
