import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import "jquery";

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
