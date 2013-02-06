"use strict";

var lib = module.exports = require('underscore');

lib.longTitle = function (tab, title) {
  var parts = ['Hire Adrian Lang'];
  if (tab && tab !== 'Intro') {
    parts.push(tab);
  }
  if (title) {
    parts.push(title);
  }
  return parts.join(' | ');
};

lib.mimeType = function (subtype) {
  return 'application/prs.de.adrianlang.hire.' + subtype;
};

lib.html = function (str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
};

lib.id = function (item) {
  return item.toLowerCase().replace(/ /g, '_').replace(/[\/.]/g, '-');
};

lib.linkTo = function (def, path, txt) {
  if (typeof path === 'string') {
    path = [path];
  }
  if (path.length === 1) {
    path.unshift(def);
  }
  if (typeof txt === 'undefined') {
    txt = path[path.length - 1];
  }
  return '<a href="/' + path.map(lib.id).map(lib.html).join('/') + '" ' +
    'title="' + lib.html(lib.longTitle(path[0], path[1])) + '">' +
    lib.html(txt) + '</a>';
};

lib.buildSubs = function (tab, items, defaults) {
  var longTitle = lib.longTitle;

  defaults = defaults || {};

  if (items) {
    longTitle = longTitle.bind(undefined, tab);
  } else {
    items = tab;
  }

  return lib.reduce(items, function (ret, data, item) {
    ret[lib.id(item)] = lib.extend({
      title: item,
      longTitle: longTitle(item)
    }, defaults, data);
    return ret;
  }, {});
};

lib.firstRes = function (items, test_func) {
  var res = null;
  items.some(function () {
    res = test_func.apply(this, Array.prototype.slice.call(arguments));
    return res;
  });
  return res;
};
