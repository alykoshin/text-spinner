/**
 * Created by alykoshin on 13.02.16.
 */

'use strict';

var request = require('request');

var spinner = require('../')({ interval: 100 });


var url = 'https://nodejs.org/dist/v7.0.0/node-v7.0.0-linux-ppc64.tar.gz'; // about 15 MB File


console.log('* Downloading test file ' + url + '...');

request
  .get(url)
  .on('response', function (res) {
    var contentLength = parseInt(res.headers[ 'content-length' ]);
    console.log('* Download started, size: ' + (contentLength ? contentLength + ' bytes' : 'unknown') + '.'); })
  .on('data',     function (chunk) {
    spinner.spin();
  })
  .on('end',      function() {
    console.log('* Download finished.');
  })
  .on('error',      function(err) {
    console.log('* ERROR:', err);
  })
;

