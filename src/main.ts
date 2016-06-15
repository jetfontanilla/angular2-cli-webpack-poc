import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './app/';
import { LearnComponent } from './app/player/learn'

if (environment.production) {
  enableProdMode();
}

bootstrap(LearnComponent);

