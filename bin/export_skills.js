// An utility script listing the defined skills grouped by score
"use strict";

var skills = require('../subs/skills'),
  _ = require('underscore');

console.log(_.reduce(skills, function (ret, data, skill) {
  ret += (new Array(data.score + 1)).join(skill.replace(/ (.)/g, function (_, c) {
    return c.toUpperCase();
  }) + ' ');
  return ret;
}, '').replace(/(.{0,80}) /g, '$1\n'));
