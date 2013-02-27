/*jslint node:false,browser:true*/
/*global $*/
(function () {
  "use strict";

  var load = (function () {
    var last_loaded = null,
      url_matcher = /^\/([^.\/]*)(?:\/([^.\/]*))?$/;

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

      $.ajax({
        url: url + '?chromebug=' + mime,
        // I want to get the response object, so I need to pass a
        // non-existing type so that reqwest doesn't do anything clever
        type: '__non_existing__',
        headers: { 'Accept': mime }
      }).then(function (resp) {
        target.innerHTML = resp.responseText;

        if (title) {
          document.title = title;
        }

        var $nav = $('nav');
        $nav.find('a.active').removeClass('active');
        $nav.find('a[href="/' + (url_parsed[1] || 'intro') + '"]').addClass('active');

        last_loaded = url_parsed[1];
      }, function () {
        document.location = url;
      });

      return true;
    };
  }());

  // From https://github.com/defunkt/jquery-pjax/blob/master/jquery.pjax.js
  $(window).on('popstate', function () {
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

  $.domReady(function () {
    $(document.body).on('click', 'a[href^=/]', function (e) {
      var url = this.getAttribute('href'),
        title = this.title;
      if (e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }

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
  });
}());
