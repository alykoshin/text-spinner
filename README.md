[![npm version](https://badge.fury.io/js/text-spinner.svg)](http://badge.fury.io/js/text-spinner)
[![Build Status](https://travis-ci.org/alykoshin/text-spinner.svg)](https://travis-ci.org/alykoshin/text-spinner)
[![Coverage Status](https://coveralls.io/repos/alykoshin/text-spinner/badge.svg?branch=master&service=github)](https://coveralls.io/github/alykoshin/text-spinner?branch=master)
[![Code Climate](https://codeclimate.com/github/alykoshin/text-spinner/badges/gpa.svg)](https://codeclimate.com/github/alykoshin/text-spinner)
[![Inch CI](https://inch-ci.org/github/alykoshin/text-spinner.svg?branch=master)](https://inch-ci.org/github/alykoshin/text-spinner)

[![Dependency Status](https://david-dm.org/alykoshin/text-spinner/status.svg)](https://david-dm.org/alykoshin/text-spinner#info=dependencies)
[![devDependency Status](https://david-dm.org/alykoshin/text-spinner/dev-status.svg)](https://david-dm.org/alykoshin/text-spinner#info=devDependencies)


# text-spinner

Spinning progress indicator for console applications

![Spinner example](https://raw.githubusercontent.com/alykoshin/text-spinner/master/doc/spinner1.gif)

If you have different needs regarding the functionality, please add a [feature request](https://github.com/alykoshin/text-spinner/issues).


## Installation

```sh
npm install --save text-spinner
```

## Usage

```
// Require the module and set options
var spinner = require('../')({ 
  interval: 100  // default value 
}); 

// Update spinner one time
spinner.spin(); 
```

Options:
- `interval`: minimum interval to print the spinner; if `spinner.spin()` is called several times during `interval`, spinner will be updated only once. Default: 100 (ms). 


Example 1 (`examples/app1.js`)

```
var spinner = require('../')({ interval: 100 });

setInterval(function() {
  spinner.spin();
}, 10); // Spinner is triggered every 10ms, but output is refreshed with 100ms (value of options.interval parameter)
```

Example 2 (`examples/app2.js`)

```
var request = require('request');
//var spinner = require('text-spinner')({ interval: 100 });
var spinner = require('../')({ interval: 100 });

var url = 'http://mirror.internode.on.net/pub/test/5meg.test1'; // 5 MB File

console.log('* Downloading test file...');

request
  .get(url)
  .on('data', spinner.spin)
;
```

Example 3 (`examples/app2.js`)

```
var request = require('request');
//var spinner = require('text-spinner')({ interval: 100 });
var spinner = require('../')({ interval: 100 });

var url = 'http://mirror.internode.on.net/pub/test/5meg.test1'; // 5 MB File

console.log('* Downloading test file...');

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
```

## Credits
[Alexander](https://github.com/alykoshin/)


# Links to package pages:

[github.com](https://github.com/alykoshin/text-spinner) &nbsp; [npmjs.com](https://www.npmjs.com/package/text-spinner) &nbsp; [travis-ci.org](https://travis-ci.org/alykoshin/text-spinner) &nbsp; [coveralls.io](https://coveralls.io/github/alykoshin/text-spinner) &nbsp; [inch-ci.org](https://inch-ci.org/github/alykoshin/text-spinner)


## License

MIT
