/**
 * Created by alykoshin on 13.02.16.
 */

'use strict';

var request = require('request');
//var spinner = require('text-spinner')({ interval: 100 });
var spinner = require('../')({ interval: 100 });


var url = 'https://nodejs.org/dist/v7.0.0/node-v7.0.0-linux-ppc64.tar.gz'; // about 15 MB File


console.log('* Downloading test file...');

request
  .get(url)
  .on('data', spinner.spin)
;
