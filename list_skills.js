"use strict";

var skills = require('./skills'),
    _ = require('underscore');

skills = _.map(_.groupBy(skills, function (skill) {
    return skill.score;
}), function (skill) {
    return _.pluck(skill, 'title');
});

_.each(skills, function (g) {
    console.log('::', g.join(', '), '\n');
});
