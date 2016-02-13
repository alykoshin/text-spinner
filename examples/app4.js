/**
 * Created by alykoshin on 13.02.16.
 */

'use strict';

var request = require('request');

var Spinner = require('../');

var spinInterval = 250;

var spinners = [
  [     // 1
    '|',
    '/',
    '-',
    '\\'
  ], [ // 2
    '\u2596', // Quadrant Lower Left
    '\u2598', // Quadrant Upper Left
    '\u259d', // Quadrant Upper Right
    '\u2597', // Quadrant Lower Right
  ], [ // 3
    '\u2599', // Quadrant Upper Left and Lower Left and Lower Right
    '\u259b', // Quadrant Upper Left and Upper Right and Lower Left
    '\u259c', // Quadrant Upper Left and Upper Right and Lower Right
    '\u259f', // Quadrant Upper Right and Lower Left and Lower Right
  ], [ // 4
    '\u259a', // Quadrant Upper Left and Lower Right
    '\u259e', // Quadrant Upper Right and Lower Left
  ], [ // 5
    '\u25f4', // White Circle with Upper Left Quadrant
    '\u25f7', // White Circle with Upper Right Quadrant
    '\u25f6', // White Circle with Lower Right Quadrant
    '\u25f5', // White Circle with Lower Left Quadrant
  ], [ // 6
    '\u2581', // Lower One Eighth Block
    '\u2582', // Lower One Quarter Block
    '\u2583', // Lower Three Eighths Block
    '\u2584', // Lower Half Block
    '\u2585', // Lower Five Eighths Block
    '\u2586', // Lower Three Quarters Block
    '\u2587', // Lower Seven Eighths Block
    '\u2588', // Full Block
  ], [ // 7
    '\u2574', // Box Drawings Light Left
    '\u2575', // Box Drawings Light Up
    '\u2576', // Box Drawings Light Right
    '\u2577', // Box Drawings Light Down
  ], [ // 8
    '\u2578', // Box Drawings Heavy Left
    '\u2579', // Box Drawings Heavy Up
    '\u257a', // Box Drawings Heavy Right
    '\u257b', // Box Drawings Heavy Down
  ], [ // 9
    '\u2581', // Lower One Eighth Block
    '\u258f', // Left One Eighth Block
    '\u2594', // Upper One Eighth Block
    '\u2595', // Right One Eighth Block
  ], [ // 9
    '\u258c', // Left Half Block
    '\u2580', // Upper Half Block
    '\u2590', // Right Half Block
    '\u2584', // Lower Half Block
  ], [ // 10
    '\u25b6', // Black Right-Pointing Triangle
    '\u25b7', // White Right-Pointing Triangle
  ], [
    '\u25a0', // Black Square
    '\u25a1', // White Square
  ], [

  // Commented out as this symbol in some fonts has width different form other symbols
  //
  //  '\u23f3', // Hourglass with Flowing Sand
  //  //'\u25a1', // White Square
  //  ' ',
  //], [

    '\u25c6', // Black Diamond
    '\u25c7', // White Diamond
  ], [
    '[------]',
    '[>-----]',
    '[>>----]',
    '[>>>---]',
    '[>>>>--]',
    '[>>>>>-]',
    '[>>>>>>]',
    '[->>>>>]',
    '[-->>>>]',
    '[--->>>]',
    '[---->>]',
    '[----->]',
  ], [
    '[>>>---]',
    '[->>>--]',
    '[-->>>-]',
    '[--->>>]',
    '[>--->>]',
    '[>>--->]',
  ], [
    '[        ]',
    '[   <>   ]',
    '[  <<>>  ]',
    '[ <<<>>> ]',
    '[<<<<>>>>]',
  ]
];

var column = 0;
for (var len=spinners.length, i=0; i<len; ++i) {
  Spinner({
    auto:     true,
    interval: spinInterval,
    spinner:  spinners[ i ],
    prefix:   '\x1B[' + (column+1) + 'G'
  });
  column += spinners[ i ][0].length + 1;  // Assuming each spinner definition has constant string lengths
}
