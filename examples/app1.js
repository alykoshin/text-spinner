/**
 * Created by alykoshin on 11.02.16.
 */

'use strict';

var spinner = require('../')({ interval: 100 });


setInterval(function() {

  spinner.spin();

}, 10);
