import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ReSellerModule } from './app/reseller.module';


platformBrowserDynamic().bootstrapModule(ReSellerModule)
  .catch(err => console.error(err));
