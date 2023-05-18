import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// monkey patching
const _setInterval = window.setInterval;
(window as any).setInterval = function (...args: any[]): number {
  console.log('setInterval was called', args);
  return _setInterval.apply(this, args as any) as unknown as number;
}
