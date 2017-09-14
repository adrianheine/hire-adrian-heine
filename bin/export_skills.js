// An utility script listing the defined skills grouped by score
"use strict";

var skills = require('../subs/skills');

console.log(Object.keys(skills).reduce(function (ret, skill) {
  let data = skills[skill];
  ret += (new Array(data.score + 1)).join(skill.replace(/ (.)/g, function (_, c) {
    return c.toUpperCase();
  }) + ' ');
  return ret;
}, '').replace(/(.{0,80}) /g, '$1\n'));
