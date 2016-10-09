'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('meanGameApp.util', [])
  .factory('Util', UtilService)
  .name;
