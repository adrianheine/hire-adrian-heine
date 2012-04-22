"use strict";

var lib = require("lib");

exports.firstRes = function (beforeExit, assert) {
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
};

// Make sure that firstRes passes fail types from the inner function
exports.firstResFailTypes = function (beforeExit, assert) {
    assert.strictEqual(lib.firstRes(['focus', 'tab'], function (type) {
        return (type === '__none__') && type;
    }), false);

    assert.strictEqual(lib.firstRes([1, 2], function (v) {
        return v - v;
    }), 0);

    assert.strictEqual(lib.firstRes([{}, {}], function (v) {
        return v.x;
    }), undefined);
};
