"use strict";

var lib = module.exports;

lib.html = function (str) {
  return str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');
};

lib.id = item => item.toLowerCase().replace(/ /g, '_').replace(/[/.]/g, '-').replace(/adv/g, 'a__');

lib.longTitle = function (tab, title) {
  var parts = ['Hire Adrian Heine'];
  if (tab && tab !== 'Intro') {
    parts.push(tab);
  }
  if (title) {
    parts.push(title);
  }
  return parts.join(' | ');
};

lib.mimeType = subtype => 'application/prs.de.adrianlang.hire.' + subtype;

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
  return '<a href="' + lib.html('/' + path.map(lib.id).join('/')) + '" ' +
    'title="' + lib.html(lib.longTitle(path[0], path[1])) + '">' +
    lib.html(txt) + '</a>';
};

lib.buildSubs = function (tab, items) {
  var longTitle = lib.longTitle;

  if (items) {
    longTitle = longTitle.bind(undefined, tab);
  } else {
    items = tab;
  }

  return Object.keys(items).reduce((ret, item) => {
    let data = items[item];
    ret[lib.id(item)] = Object.assign({
      title: item,
      longTitle: longTitle(item)
    }, data);
    return ret;
  }, {});
};
