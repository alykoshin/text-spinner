/**
 * Created by alykoshin on 11.02.16.
 */

'use strict';

var spinner = require('../')({ interval: 500 });


setInterval(function() {

  spinner.spin();

}, 10);
