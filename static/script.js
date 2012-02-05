/*jslint node:false,browser:true*/
/*global $*/
(function () {
    "use strict";

    var load = (function () {
        var last_loaded = null,
            url_matcher = /^\/([^.\/]*)(?:\/([^.\/]*))?$/;

        return function (url, title) {
            var $target, mime, url_parsed = url.match(url_matcher);
            if (!url_parsed) {
                return false;
            }
            if (url_parsed[2] && last_loaded === url_parsed[1]) {
                $target = $('#focus');
                mime = 'application/prs.de.adrianlang.hire.focus';
            }
            if (!$target || $target.length === 0) {
                $target = $('#content');
                mime = 'application/prs.de.adrianlang.hire.tab';
            }

            $.ajaxSetup({headers: {'Accept': mime}});
            $target.load(url, function (responseText, textStatus) {
                if (['success', 'notmodified'].indexOf(textStatus) === -1) {
                    return;
                }

                if (title) {
                    document.title = title;
                }

                $('nav a.active').removeClass('active');
                $('a[href="/' + (url_parsed[1] || 'intro') + '"]').addClass('active');

                last_loaded = url_parsed[1];
            });

            return true;
        };
    }());

    // From https://github.com/defunkt/jquery-pjax/blob/master/jquery.pjax.js
    window.onpopstate = (function () {
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

    $(function () {
        $(document.body).on('click', 'a', function (e) {
            var $this = $(this),
                url = $this.attr('href'),
                title = $this.attr('title');
            if (e.ctrlKey || e.shiftKey || e.altKey) {
                return;
            }

            if (!load(url, title)) {
                return;
            }
            history.pushState({url: url, title: title}, title, url);
            e.preventDefault();
        });

        history.replaceState({url: String(document.location.pathname),
                              title: String(document.title)},
                             String(document.title));
    });
}());
