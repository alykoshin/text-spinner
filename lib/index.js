/**
 * Created by alykoshin on 11.02.16.
 */

'use strict';

/**
 *
 * @param {object} options
 * @param {boolean} [options.auto=false]
 * @param {string} [options.prefix='']
 * @param {string} [options.postfix='\x1B[0G']
 * @param {number} [options.interval=100]      - milliseconds
 * @param {string[]} [options.spinner=[ '|', '/', '-', '\\' ]]
 * @constructor
 */
var TextSpinner = function(options) {
  var self = this;

  options = options || {};
  var interval = options.interval || 100;
  var auto     = typeof options.auto === 'undefined' ? false : options.auto;
  var prefix   = options.prefix   || '';
  var postfix  = options.postfix  || '\x1B[0G';
  var spinner  = options.spinner  || [ '|', '/', '-', '\\' ];

  var spinMsecs;
  var spinIdx = 0;

  self.progress = function() {
    var msecs = (new Date()).getTime();
    if (!spinMsecs || (msecs - spinMsecs > interval)) {
      spinMsecs = msecs;
      self.rotate();
    }
  };

  self.spin = self.progress;

  /**
   * @param [idx]
   */
  self.rotate = function(idx) {
    self.clean();
    if (idx) {
      spinIdx = idx;
    } else {
      spinIdx++;
    }
    spinIdx %= spinner.length;
    self.print();
  };

  self._clean = function(len) {
    var s = new Array(len+1).join(' ');
    process.stdout.write(prefix + s + postfix);
  };

  self.clean = function() {
    var len = spinner[spinIdx ].length;
    self._clean(len);
  };

  self._print = function(s) {
    process.stdout.write(prefix + s + postfix);
  };

  self.print = function() {
    self._print(spinner[ spinIdx ]);
  };

  // Auto rotation

  self.autoInterval = null;

  self.active = false;

  self.start = function() {
    self.active = true;
    self.autoInterval = setInterval(function() {
      self.rotate();
    }, interval);
  };

  self.stop = function() {
    clearInterval(self.autoInterval);
    self.clean();
    self.autoInterval = null;
    self.active = false;
  };

  if (auto) {
    self.start();
  }

  //
};


module.exports = function(options) {
  return new TextSpinner(options);
};
