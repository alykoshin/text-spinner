[![npm version](https://badge.fury.io/js/text-spinner.svg)](http://badge.fury.io/js/text-spinner)
[![Build Status](https://travis-ci.org/alykoshin/text-spinner.svg)](https://travis-ci.org/alykoshin/text-spinner)
[![Coverage Status](https://coveralls.io/repos/alykoshin/text-spinner/badge.svg?branch=master&service=github)](https://coveralls.io/github/alykoshin/text-spinner?branch=master)
[![Code Climate](https://codeclimate.com/github/alykoshin/text-spinner/badges/gpa.svg)](https://codeclimate.com/github/alykoshin/text-spinner)
[![Inch CI](https://inch-ci.org/github/alykoshin/text-spinner.svg?branch=master)](https://inch-ci.org/github/alykoshin/text-spinner)

[![Dependency Status](https://david-dm.org/alykoshin/text-spinner/status.svg)](https://david-dm.org/alykoshin/text-spinner#info=dependencies)
[![devDependency Status](https://david-dm.org/alykoshin/text-spinner/dev-status.svg)](https://david-dm.org/alykoshin/text-spinner#info=devDependencies)


# text-spinner

Spinning progress indicator for console applications

![Example app1.js](https://raw.githubusercontent.com/alykoshin/text-spinner/master/doc/app1.gif)

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
- `interval`- minimum interval to print the spinner; if `spinner.spin()` is called several times during `interval`, spinner will be updated only once. Default: `100` (ms). 
- `prefix`  - prefix to print before the spinner. Default: `''`. You may set it to `'\x1B['+column+'G'` to position cursor to specific column. 
- `postfix` - postfix to print after the spinner. Default: `\x1B[0G` (Move to start of line).
- `auto`    - automatically rotate spinner (i.e.without calling `progress`/`rotate` methods
- `spinner` - spinner text definition. You may look to examples/app4.js for the examples.

Methods:
- `progress()` - rotate and print spinner, but not frequently than `options.interval`  
- `spin()`     - same as `progress()`
- `rotate([index])` - rotate and print spinner now, not checking `options.interval`. 
                      if `index` is set, then set index of  
- `print()` - print spinner now at current position
- `start()` - start auto rotation
- `stop()` - stop auto rotation

Properties:
- `active`  - status of auto rotation for spinner


You may change the look of the spinner by using `spinner` option:

![Example app4.js](https://raw.githubusercontent.com/alykoshin/text-spinner/master/doc/app4.gif)


# Examples

## Example 1 (`examples/app1.js`)
Simplest example.

```
var spinner = require('../')();

setInterval(function() {
  spinner.spin();
}, 10); // Spinner is triggered every 10ms, but output is refreshed with 100ms (value of options.interval parameter)
```

## Example 2 (`examples/app2.js`)
This is minimal example to show progress for file download. 

```
var request = require('request');
var spinner = require('text-spinner')({ interval: 100 });

var url = 'http://mirror.internode.on.net/pub/test/5meg.test1'; // 5 MB File

console.log('* Downloading test file...');

request
  .get(url)
  .on('data', spinner.spin)
;
```

## Example 3 (`examples/app3.js`)
Extended version of previous example. 

```
var request = require('request');
var spinner = require('text-spinner')({ interval: 100 });

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

## Example 4 (`examples/app4.js`)
Example 4 shows how to customize outlook for the spinner.
Please, refer to source of `examples/app4.js` for more info.


## Credits
[Alexander](https://github.com/alykoshin/)


# Links to package pages:

[github.com](https://github.com/alykoshin/text-spinner) &nbsp; [npmjs.com](https://www.npmjs.com/package/text-spinner) &nbsp; [travis-ci.org](https://travis-ci.org/alykoshin/text-spinner) &nbsp; [coveralls.io](https://coveralls.io/github/alykoshin/text-spinner) &nbsp; [inch-ci.org](https://inch-ci.org/github/alykoshin/text-spinner)


## License

MIT
