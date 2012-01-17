(function () {
    if (!history.pushState) {
        // We only support browsers with history API
        return;
    }

    function load(url, title) {
        var $target, mime;
        if (url.substr(1).indexOf('/') !== -1) {
            $target = $('#focus');
            mime = 'application/prs.de.adrianlang.hire.focus';
        }
        if (!$target || $target.length === 0) {
            $target = $('#content');
            mime = 'application/prs.de.adrianlang.hire.tab';
        }
        $.ajaxSetup({headers: {'Accept': mime}});

        $target.load(url);
        if (title) {
            document.title = title;
        }
    }

    // From https://github.com/defunkt/jquery-pjax/blob/master/jquery.pjax.js
    var popped = ('state' in window.history), initialURL = location.href;
    window.onpopstate = function(e) {
        // Ignore inital popstate that some browsers fire on page load
        var initialPop = !popped && location.href == initialURL;
        popped = true;
        if (initialPop) {
            return;
        }
        if (!e.state) {
            console.warn('Whaaat');
            load(document.location.pathname + '');
            return;
        }
        load(e.state.url, e.state.title);
    };

    $(function () {
        $(document.body).on('click', 'a', function (e) {
            var $this = $(this),
                url = $this.attr('href'),
                title = $this.attr('title');
            if (e.ctrlKey || e.shiftKey || e.altKey ||
                url.substr(0, 1) !== '/') {
                return;
            }
            load(url, title);
            history.pushState({url: url, title: title}, title, url);
            e.preventDefault();
        });

        history.replaceState({url: document.location.pathname + '', title: document.title + ''},
                             document.title + '');
    });
}());
