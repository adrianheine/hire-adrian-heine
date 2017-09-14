// An utility script listing the defined skills grouped by score
"use strict";

var skills = require('../subs/skills');

skills = Object.keys(skills).reduce(function (result, skill) {
  let data = skills[skill];
  result[data.score] = result[data.score] || [];
  result[data.score].push(skill + (data.desc === 'No description yet, sorry.' ? '(!)' : ''));
  return result;
}, {})

Object.keys(skills).forEach(function (k) {
  let g = skills[k];
  console.log("%d: %s\n", g.length, g.join(', '));
});
