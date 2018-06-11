'use strict';
const assert = require('assert');
const { sortByStrings } = require('./1.js');
const decodeStrings = require('./2.js');
const changePossibilities = require('./3.js');

describe('Spotify Question List', function () {
  describe('sortByStrings', function () {
    it('function should return blank string when an input value is a blank string', function () {
      assert.equal(sortByStrings('', 'abc'), '');
    });
    it('function should return blank string when there is no overlap between strings', function () {
      assert.equal(sortByStrings('abcdef', 'ghijkl'), '');
    });
    it('it should consider capital letters as unique', function () {
      assert.equal(sortByStrings('music', 'Music'), 'usic');
    });
    it('it can handle empty spaces', function () {
      assert.equal(sortByStrings('space between', 'halloween candy'), 'aweeeen c');
    });
    it('it can handle numbers', function () {
      assert.equal(sortByStrings('14 candles', ' candy214'), ' cand14');
    });
    it('Test case 1 - weather', function () {
      assert.equal(sortByStrings('weather', 'therapyw'), 'theeraw');
    });
    it('Test case 2 - good', function () {
      assert.equal(sortByStrings('good', 'odg'), 'oodg');
    });
    it('Test case 3 - spotify', function () {
      assert.equal(sortByStrings('spotify', 'topsfyi'), 'topsfyi');
    });
    it('Test case 4 - racecar', function () {
      assert.equal(sortByStrings('racecar', 'care'), 'ccaarre');
    });
  });

  describe('decodeStrings', function () {
    it('It can handle blank strings', function () {
      assert.equal(decodeStrings(''), '');
    });
    it('It can handle multi-digit integers', function () {
      assert.equal(decodeStrings('12[a]'), 'aaaaaaaaaaaa');
    });
    it('Test case 1 - nesting', function () {
      assert.equal(decodeStrings('2[b3[a]]'), 'baaabaaa');
    });
    it('Test case 2 - simple', function () {
      assert.equal(decodeStrings('4[ab]'), 'abababab');
    });
    it('Test case 3 - hanging value', function () {
      assert.equal(decodeStrings('2[s3[hi]X]'), 'shihihiXshihihiX');
    });
    it('Test case 4 - letter first', function () {
      assert.equal(decodeStrings('a2[ab]'), 'aabab');
    });
    it('Test case 5 - inline recursive calls', function () {
      assert.equal(decodeStrings('2[s2[hello]t2[goodbye]]'), 'shellohellotgoodbyegoodbyeshellohellotgoodbyegoodbye');
    });
  });

  describe('changePossibilities', function () {
    it('It can handle empty coin arrays', function () {
      assert.equal(changePossibilities(10, []), 0);
    });
    it('It returns 0 if the value is not a number', function () {
      assert.equal(changePossibilities('', [1, 2, 3]), 0);
    });
    it('It can make change for a value of 0', function () {
      assert.equal(changePossibilities(0, [1, 2, 3]), 1);
    });
    it('Test case 1', function () {
      assert.equal(changePossibilities(4, [1, 2, 3]), 4);
    });
    it('Test case 2', function () {
      assert.equal(changePossibilities(10, [1, 5, 10, 25]), 4);
    });
    it('Test case 3', function () {
      assert.equal(changePossibilities(9, [5]), 0);
    });
    it('Test case 4', function () {
      assert.equal(changePossibilities(12, [1, 3, 6, 10]), 10);
    });
  });
});
