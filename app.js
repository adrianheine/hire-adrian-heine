'use strict';

const http = require('http');
const fs = require('fs/promises');

const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const sass = require('sass');

const lib = require('./lib');

const staticDir = '/static';
const app = module.exports = express();

const statFile = function (filename) {
  return fs.stat(filename).catch(function (err) {
    if (err.code === 'ENOENT') {
      return null;
    }
    throw err;
  });
}

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(favicon(__dirname + '/favicon.ico'));

// My little SCSS middleware
const cssPath = staticDir + '/style.css';
const srcDir = __dirname + '/style/';
app.get(cssPath, function (req, res, next) {
  const COMPILE = {};
  statFile(__dirname + cssPath).then(function (stats) {
    if (!stats) {
      throw COMPILE;
    }
    return fs.readdir(srcDir).then(function (files) {
      return Promise.all(files.map(function (file) {
        return fs.stat(srcDir + file).then(function (srcStats) {
          if (srcStats.mtimeMs > stats.mtimeMs) {
            throw COMPILE;
          }
        });
      }));
    });
  }).catch(function (err) {
    if (err !== COMPILE) {
      throw err;
    }
    return fs.writeFile(__dirname + cssPath, sass.compile(__dirname + '/style/style.scss', {
      style: app.get('env') === 'production' ? 'compressed' : 'expanded'
    }).css);
  }).then(function () {
    next();
  }).catch(function (err) {
    next(err);
  });
});
app.use(staticDir, express.static(__dirname + staticDir, {maxAge: 1000 * 60 * 60 * 24 * 365}));
app.use(logger('dev'));

// Route
var tabs = lib.buildSubs({'Intro': {}, 'Skills': {}, 'Examples': {}, 'CV': {}, 'Contact': {}});

Object.keys(tabs).forEach(async function (tabid) {
  let tab = tabs[tabid];
  if (await statFile(__dirname + '/subs/' + tabid + '.js') !== null) {
    tab.subs = lib.buildSubs(tab.title, require('./subs/' + tabid));
  }
});

app.get('/:tab?/:sub?', function (req, res, next) {
  var cur_t = req.params.tab || 'intro',
    sub = req.params.sub,
    fragment = false;

  if (!tabs.hasOwnProperty(cur_t) ||
      (sub && !tabs[cur_t].subs.hasOwnProperty(sub))) {
    next();
    return;
  }

  if (!req.accepts('html')) {
    fragment = ['focus', 'tab'].find(type => req.accepts(lib.mimeType(type)));
  }

  res.header('Vary', 'Accept');

  if (fragment) {
    // Do not use res.contentType since it performs a mime lookup which
    // resolves my personal mime type with application/octet-stream.
    res.header('Content-Type', lib.mimeType(fragment));
  }

  res.render(cur_t + (fragment === 'focus' && sub ? '_sub' : ''), {
    tabs: tabs,
    cur_t: cur_t,
    sub: sub,
    longTitle: sub ? tabs[cur_t].subs[sub].longTitle : tabs[cur_t].longTitle,
    linkTo: lib.linkTo.bind(undefined, tabs[cur_t].title),
    layout: !fragment
  });
});

const port = process.env.PORT || 9002
http.createServer(app).listen(port, function(){
  console.log("Express server listening on port %s in %s mode", port, app.get('env'));
});
