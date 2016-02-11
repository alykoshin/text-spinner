/**
 * Created by alykoshin on 11.02.16.
 */

'use strict';


var TextSpinner = function(options) {
  var self = this;

  options = options || {};
  options.interval = options.interval || 100;

  var spinMsecs;
  var spinIdx = 0;
  var spinner = [
    '|',
    '/',
    '-',
    '\\'
  ];
  //var spinner = [
  //  ' [------]',
  //  ' [>-----]',
  //  ' [>>----]',
  //  ' [>>>---]',
  //  ' [>>>>--]',
  //  ' [>>>>>-]',
  //  ' [>>>>>>]',
  //];
  //var spinner = [
  //  ' [>>>---]',
  //  ' [->>>--]',
  //  ' [-->>>-]',
  //  ' [--->>>]',
  //  ' [>--->>]',
  //  ' [>>--->]',
  //];

  self.spin = function() {
    var msecs = (new Date()).getTime();
    if (!spinMsecs || (msecs - spinMsecs > options.interval)) {
      spinMsecs = msecs;
      spinIdx++;
      if (spinIdx >= spinner.length) {
        spinIdx = 0;
      }
      process.stdout.write('' + spinner[ spinIdx ] + '\x1B[0G');
      //console.log('\x1B[0G' + spinner[spinnerIdx] + ' \x1B[0G');
    }
  };

};


module.exports = function(options) {
  return new TextSpinner(options);
};

/*
 spinner = require('../lib/spinner')({});

 spinner.spin();

 */
