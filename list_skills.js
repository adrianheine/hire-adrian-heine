// An utility script listing the defined skills grouped by score
"use strict";

var skills = require('./subs/skills'),
  _ = require('underscore');

skills = _.map(_.groupBy(_.map(skills, function (data, skill) {
  return {
    score: data.score,
    title: skill + (data.desc === 'No description yet, sorry.' ? '(!)' : '')
  };
}), function (skill) {
  return skill.score;
}), function (group) {
  return _.pluck(group, 'title');
});

_.each(skills, function (g) {
  console.log(String(g.length), ':', g.join(', '), '\n');
});
