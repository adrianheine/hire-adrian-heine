// An utility script listing the defined skills grouped by score
"use strict";

var skills = require('../subs/skills');

let text = Object.keys(skills).reduce(
  (ret, skill) => ret + (skill.replace(/ (.)/g, (_, c) => c.toUpperCase()) + ' ').repeat(skills[skill].score + 1),
  ''
).replace(/(.{0,80}) /g, '$1\n')
console.log(text);
