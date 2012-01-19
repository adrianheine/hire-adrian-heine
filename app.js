"use strict";

/**
 * Module dependencies.
 */

var express = require('express'),
    lib = require('./lib');

var app = module.exports = express.createServer();

// Configuration

app.configure(function () {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon('favicon.ico'));
    app.use('/static', express['static'](__dirname + '/static'));
    app.use(express.logger('[:date] ":url" :status ":referrer" ":user-agent"'));
    app.use(app.router);
});

app.configure('development', function () {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function () {
    app.use(express.errorHandler());
});

// Routes
var tabs = lib.reduce(['Intro', 'Skills', 'Examples', 'CV', 'Contact'], function (obj, tab) {
    var tabid = tab.toLowerCase();
    obj[tabid] = {
        title: tab,
        longTitle: lib.longTitle(tab),
        subs: require('./' + tabid)
    };
    return obj;
}, {});

app.get('/:tab?/:sub?', function (req, res, next) {
    var cur_t = req.params.tab || 'intro',
        sub = req.params.sub,
        fragment = false;

    if (!tabs.hasOwnProperty(cur_t) ||
        (sub && !tabs[cur_t].subs.hasOwnProperty(sub))) {
        return next();
    }

    if (!req.accepts('html')) {
        if (req.accepts(lib.mimeType('focus'))) {
            fragment = 'focus';
        } else if (lib.mimeType('tab')) {
            fragment = 'tab';
        }
    }

    res.header('Vary', 'Accept');

    if (fragment) {
        // Do not use res.contentType since it performs a mime lookup which
        // resolves my personal mime type with application/octet-stream.
        res.header('Content-Type', lib.mimeType(fragment));
    }

    res.render(cur_t + (fragment === 'focus' && sub ? '_sub' : ''),
               {tabs: tabs, cur_t: cur_t, sub: sub,
                longTitle: sub ? tabs[cur_t].subs[sub].longTitle : tabs[cur_t].longTitle,
                layout: !fragment});
});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
