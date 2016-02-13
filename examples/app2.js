/**
 * Created by alykoshin on 13.02.16.
 */

'use strict';

var request = require('request');
//var spinner = require('text-spinner')({ interval: 100 });
var spinner = require('../')({ interval: 100 });


var url = 'http://mirror.internode.on.net/pub/test/5meg.test1'; // 5 MB File
//var url = 'http://web4host.net/5MB.zip';  // 5MB File
//var url = 'http://mirror.nl.leaseweb.net/speedtest/10mb.bin'; // 10 MB File


console.log('* Downloading test file...');

request
  .get(url)
  .on('data', spinner.spin)
;
