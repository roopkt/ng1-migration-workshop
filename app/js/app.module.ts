import * as angular from 'angular';
import * as ngRoute from 'angular-route';
import { CoreModule } from './core/core.module';
import { configure } from './app.config';

/* App Module */

export const PhonecatApp = angular
  .module( 'phonecatApp', [
    ngRoute,
    CoreModule,
    'phonecat.phoneList',
    'phonecat.phoneDetail'
  ] )
  .config(configure);
