"use strict";

var skills = require('./skills'),
    _ = require('underscore');

skills = _.map(_.groupBy(_.map(skills, function (data, skill) {
    return {score: data.score, title: skill};
}), function (skill) {
    return skill.score;
}), function (group) {
    return _.pluck(group, 'title');
});

_.each(skills, function (g) {
    console.log('::', g.join(', '), '\n');
});
