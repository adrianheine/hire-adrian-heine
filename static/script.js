(function () {
  "use strict";

  var load = (function () {
    var url_matcher = /^\/([^./]*)(?:\/([^./]*))?$/,
      last_loaded = String(document.location.pathname).match(url_matcher)[1];

    return function (url, title) {
      var target, mime, url_parsed = url.match(url_matcher);
      if (url_parsed[2] && last_loaded === url_parsed[1]) {
        target = document.getElementById('focus');
        mime = 'application/prs.de.adrianlang.hire.focus';
      }
      if (!target || target.length === 0) {
        target = document.getElementById('content');
        mime = 'application/prs.de.adrianlang.hire.tab';
      }

      var oReq = new XMLHttpRequest();
      oReq.addEventListener("load", () => {
        // Make sure that we got the right thing
        var received_mime = oReq.getResponseHeader('Content-Type');
        if (received_mime.substr(0, mime.length + 1) !== mime + ';') {
          // If not, fall back to plain page loading
          document.location = url;
          return;
        }

        target.innerHTML = oReq.responseText;

        if (title) {
          document.title = title;
        }

        let active_tab = document.querySelector('nav a.active');
        if (active_tab) active_tab.classList.remove('active');
        if (url_parsed[1])
          document.querySelector('nav a[href="/' + url_parsed[1] + '"]').classList.add('active');

        last_loaded = url_parsed[1];
      });
      oReq.addEventListener('error', function () {
        document.location = url;
      });
      oReq.open('GET', url);
      oReq.setRequestHeader('Accept', mime);
      oReq.send();

      return true;
    };
  }());

  // From https://github.com/defunkt/jquery-pjax/blob/master/jquery.pjax.js
  window.addEventListener('popstate', function () {
    var popped = typeof history.state !== 'undefined',
      initialURL = location.href;
    return function (e) {
      // Ignore inital popstate that some browsers fire on page load
      var initialPop = !popped && location.href === initialURL;
      popped = true;
      if (initialPop) {
        return;
      }
      if (!e.state) {
        console.warn('Whaaat', document.location);
        load(String(document.location.pathname));
        return;
      }
      load(e.state.url, e.state.title);
    };
  }());

  document.body.addEventListener('click', function (e) {
    var a = e.target;
    while (a && a.tagName !== 'A') a = a.parentNode;
    if (!a) return;
    var url = a.getAttribute('href');
    if (!url.match(/^\//)) return;
    if (e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }

    var title = a.title
    if (!load(url, title)) {
      return;
    }
    history.pushState({url: url, title: title}, title, url);
    e.preventDefault();
  });

  history.replaceState({
    url: String(document.location.pathname),
    title: String(document.title)
  }, String(document.title));
}());
