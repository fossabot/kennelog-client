import { Aurelia } from 'aurelia-framework';
import environment from './environment';
import { PLATFORM } from 'aurelia-pal';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import { initialState } from './shared/app-state';

export function configure(aurelia: Aurelia): void {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.use.plugin(PLATFORM.moduleName('aurelia-store'), { initialState });
  aurelia.use.plugin(PLATFORM.moduleName('aurelia-validation'));

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
