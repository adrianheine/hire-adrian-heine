"use strict";

/**
 * Module dependencies.
 */

var express = require('express'),
    fs = require('fs'),
    lib = require('./lib'),

    staticDir = '/static',
    lessConfig = {
        src: __dirname + staticDir + '/style',
        dstRoot: __dirname
    };

var app = module.exports = express.createServer();

// Configuration

app.configure(function () {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon(__dirname + '/favicon.ico'));

    app.use(require('connect-less')(lessConfig));

    app.use(staticDir, express['static'](__dirname + staticDir, {maxAge: 1000 * 60 * 60 * 24 * 365}));
    app.use(express.logger('[:date] ":url" :status ":referrer" ":user-agent"'));
    app.use(app.router);
});

app.configure('development', function () {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    lessConfig.compress = false;
});

app.configure('production', function () {
    app.use(express.errorHandler());
    lessConfig.compress = true;
});

// Routes
var tabs = lib.buildSubs({'Intro': {}, 'Skills': {}, 'Examples': {}, 'CV': {}, 'Contact': {}});

lib.each(tabs, function (tab, tabid) {
    if (fs.existsSync(__dirname + '/subs/' + tabid + '.js')) {
        tab.subs = lib.buildSubs(tab.title, require('./subs/' + tabid));
    }
});

app.get('/:tab?/:sub?', function (req, res, next) {
    var cur_t = req.params.tab || 'intro',
        sub = req.params.sub,
        fragment = false;

    if (!tabs.hasOwnProperty(cur_t) ||
            (sub && !tabs[cur_t].subs.hasOwnProperty(sub))) {
        return next();
    }

    if (!req.accepts('html')) {
        fragment = lib.firstRes(['focus', 'tab'], function (type) {
            return req.accepts(lib.mimeType(type)) && type;
        });
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
                linkTo: lib.linkTo.bind(undefined, tabs[cur_t].title),
                layout: !fragment});
});

app.listen(9002, '127.0.0.1', function () {
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
