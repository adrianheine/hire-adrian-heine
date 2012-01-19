var lib = module.exports = require('underscore');

lib.longTitle = function (tab, title) {
    return 'Hire Adrian Lang | ' + tab + (title ? ' | ' + title : '');
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
