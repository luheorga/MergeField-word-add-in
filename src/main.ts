import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

declare const Office: any;

function launch() {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
}
if (window.hasOwnProperty('Office') && window.hasOwnProperty('Word')) {
  Office.initialize = () => { launch(); }
}
else {
  launch();
}

