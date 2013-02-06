"use strict";

var assert = require('assert');
var lib = require("../lib");

describe('firstRes', function () {
  it('returns the expected results', function () {
    assert.strictEqual(lib.firstRes(['focus', 'tab'], function (type) {
        return (type === 'focus') && type;
    }), 'focus');
    assert.strictEqual(lib.firstRes(['focus', 'tab'], function (type) {
        return (type === 'tab') && type;
    }), 'tab');

    assert.strictEqual(lib.firstRes([0, 1, 2], function (type) {
        return type;
    }), 1);
    assert.strictEqual(lib.firstRes([0, 1, 2], function (type) {
        return type + 5;
    }), 5);
  });

  it('passes fail types from the inner function', function () {
    assert.strictEqual(lib.firstRes(['focus', 'tab'], function (type) {
        return (type === '__none__') && type;
    }), false);

    assert.strictEqual(lib.firstRes([1, 2], function (v) {
        return v - v;
    }), 0);

    assert.strictEqual(lib.firstRes([{}, {}], function (v) {
        return v.x;
    }), undefined);
  });
});
