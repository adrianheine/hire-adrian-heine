"use strict";
var lib = require('../lib'),
  linkTo = lib.linkTo.bind(undefined, 'Skills');

/*
 * Actuality (0-3) (>10 years ago, >5 year ago, <5 years ago, daily),
 * Depth of usage (0-3) (Barely, Sorta normal usecase, Quite some diggin, Wizardry)
 *
 * Remember to update style/tagcloud.less if the maximum increases
 */
module.exports = {
  'ACME': {
    when: 2023, depth: 2
  }, 'Agile': {
    when: 2016, depth: 1,
    desc: ''
  }, 'Angular': {
    when: 2013, depth: 1,
    desc: ''
  }, 'Apache': {
    when: 2014, depth: 1,
    desc: 'Apache has been my first choice for web servers for several years. Since then, I switched to ' + linkTo('nginx') + ' for everything.</p><p>I successfully deployed web applications with Apache using ' + linkTo('PHP', 'mod_php') + ', ' + linkTo('fcgid', 'mod_fcgid') + ' and ' + linkTo('Ruby on Rails', 'mod_passenger') + '.'
  }, 'Atmel': {
    when: 2009, depth: 0,
    desc: 'During my studies I made several contributions to a ' + linkTo('C', 'C-based') + ' ' + linkTo('JVM', 'Java Virtual Machine') + ' targetting Atmel systems.'
  }, 'Backbone.js': {
    when: 2016, depth: 1
  }, 'Bootstrap': {
    when: 2016, depth: 1
  }, 'C': {
    when: 2023, depth: 2,
    desc: 'I\'ve been reading and writing C code for more than 15 years. The biggest project I participated in was a C-based ' + linkTo('JVM', 'Java Virtual Machine') + ' targetting ' + linkTo('Atmel') + ' systems. I haven’t been much of a C hacker lately, but I’m still used to browsing through and editing code like the ' + linkTo('PHP') + ' interpreter or other C-based monsters.'
  }, 'CakePHP': {
    when: 2014, depth: 2,
    desc: 'CakePHP 1.3 is something I had to use for a customer. I know how to use it, how to look something up in the source or documentation and how to stay alive.'
  }, 'CodeMirror': {
    when: 2018, depth: 2
  }, 'CoffeeScript': {
    when: 2013, depth: 2
  }, 'Compound.js': {
    when: 2013, depth: 2
  }, 'CouchDB': {
    when: 2015, depth: 2,
    desc: 'I used CouchDB for some private projects. I love the way it makes me think about database performance, and that it is completely about ' + linkTo('JavaScript') + ' and ' + linkTo('HTTP') + '.'
  }, 'C++': {
    when: 2016, depth: 1,
    desc: 'Many C++ concepts like <abbr title="Template Meta-Programming">TMP</abbr> or operator overloading strike me as elegant or powerful (and sometimes even both at the same time). Unfortunately, my practical experience is limited to some small projects using g++ and ' + linkTo('Visual C++') + '.'
  }, 'CSS': {
    when: 2024, depth: 2,
    desc: 'CSS is a part of my daily work, and I apply my usual attention to it. Thus, I know my units, use CSS3 features where needed and possible and try to stay out of specificity hell. Since my ' + linkTo('HTML') + ' is semantic and non-representational, there is quite some work to do for CSS.</p><p>For ' + linkTo(['Examples', 'Hire Adrian Heine']) + ', I used ' + linkTo('LESS') + ' for CSS generation and tried to apply a loose SMACSS approach. The style has certain ' + linkTo('Responsive', 'responsive design') + ' features and uses CSS3 features like media queries, box-sizing and background-size.'
  }, 'D3.js': {
    when: 2017, depth: 1
  }, 'darcs': {
    when: 2009, depth: 0,
    desc: 'When I started contributing to ' + linkTo('DokuWiki') + ', it used darcs as a revision control system, but soon changed to ' + linkTo('git') + '.'
  }, 'DB2': {
    when: 2012, depth: 1
  }, 'Debian': {
    when: 2024, depth: 2,
    desc: 'Debian ' + linkTo('GNU/Linux') + ' is the only operating system I use extensively. It powers my workstation, notebooks and servers. Depending on the use-case I run every available suite from stable to experimental and combinations of them.</p><p>I am accustomed to building and hacking packages myself from time to time, I even created a dpkg package myself once or twice. I recommended it to several people and helped them installing and maintaining it.'
  }, 'Derby.js': {
    when: 2017, depth: 1
  }, 'DIME': {
    when: 2009, depth: 0
  }, 'Docker': {
    when: 2023, depth: 1
  }, 'DokuWiki': {
    when: 2012, depth: 3,
    desc: 'I used to be a DokuWiki core developer, contributed a big bunch of plugins and have extensive experience running and customizing DokuWiki.</p><p>In <time datetime="2011">2011</time>, I put much work into the migration from DokuWiki\'s plain-DOM JavaScript codebase to ' + linkTo('jQuery', 'jQuery-based') + ' code, including ' + linkTo('jQuery UI') + '.'
  }, 'Dovecot': {
    when: 2023, depth: 1,
    desc: 'Dovecot together with ' + linkTo('Postfix') + ' powers my self-administered mail server used by a small handful of people.'
  }, 'Ender.js': {
    when: 2012, depth: 1,
    desc: 'I tried using Ender.js-based component builds as a replacement for monolithic libraries like ' + linkTo('jQuery') + '. On ' + linkTo(['Examples', 'Hire Adrian Heine'], 'this site') + ', Ender.js with the jeesh and reqwest was used for DOM manipulation and XHRs.'
  }, 'ESLint': {
    when: 2024, depth: 1
  }, 'Etherpad lite': {
    when: 2012, depth: 2,
    desc: 'I run an Etherpad lite instance, contributed ' + linkTo('DokuWiki') + ' export and fixed a security issue. In 2012, I wrote a custom single sign-on adapter for an etherpad lite instance.'
  }, 'Express': {
    when: 2024, depth: 2,
    desc: 'I used the ' + linkTo('Node.js') + ' web framework Express in several projects. ' + linkTo(['Examples', 'Hire Adrian Heine'], 'This website') + ' is powered by Express, ' + linkTo('Etherpad lite') + ' uses Express as well, and I also used the frameworks ' + linkTo('Compound.js') + ' and ' + linkTo('Derby.js') + ', which both use Express. I also have experience with ' + linkTo('Restify') + ', which mimicks Express’ API.'
  }, 'fcgid': {
    when: 2014, depth: 1
  }, 'Flash': {
    when: 2007, depth: 1
  }, 'git': {
    when: 2024, depth: 2,
    desc: 'git is my preferred revision control system since around 2008. I use it for every non-trivial project I start from software to Diablo II save games to presentations or applications.</p><p>I consider myself a reasonably advanced git user – features like bisect, blame, hunk index adding or rebasing are part of my daily routine. Aside from the gory details, I am able to develop git-based workflows building on tags and different kinds of branches.'
  }, 'GDB': {
    when: 2023, depth: 1
  }, 'Gerrit': {
    when: 2016, depth: 1
  }, 'GNU/Linux': {
    when: 2024, depth: 1,
    desc: 'I exclusively run ' + linkTo('Debian', 'Debian GNU/Linux') + '.'
  }, 'Grunt.js': {
    when: 2013, depth: 1
  }, 'Haskell': {
    when: 2009, depth: 0,
    desc: 'I love Haskell and solved <a href="https://projecteuler.net/progress=adrianlang">50 Project Euler problems</a> with it. Still, I consider everything above the basic concepts to be really black magic and whenever I read papers on or using Haskell, I occasionally reach a point where I have to concentrate really hard or even read some 100 pages of background information.'
  }, 'HHVM': {
    when: 2016, depth: 1,
    desc: 'I used to run HHVM as part of my development environment; I submitted bugs and got patches merged.'
  }, 'HTML': {
    when: 2024, depth: 2,
    desc: 'HTML is part of my everyday work.'
  }, 'HTTP': {
    when: 2023, depth: 1,
    desc: 'My first experience with HTTP was when I used ' + linkTo('SOAP') + '. Since then, I pity the current state of HTTP usage as barely more than a stupid URL retrieving or data posting protocol. Lately, I started to like REST and its extensive use of HTTP features.'
  }, 'I18n': {
    when: 2023, depth: 1,
    desc: 'I like the challenges that come from supporting more than ASCII letters written from left to right.'
  }, 'Pug': {
    when: 2012, depth: 2,
    desc: 'I used Pug when it was called Jade in my ' + linkTo('Node.js') + ' web applications together with ' + linkTo('Express') + '. I even got a <a href="https://github.com/visionmedia/jade/commit/bef63b3ebadfcbf2b079831e58d3b959123bd5ce" title="My patch for Jade">small patch</a> landed.'
  }, 'Java': {
    when: 2009, depth: 2,
    desc: 'During my studies I made big contributions to a ' + linkTo('JVM') + ' targetting embedded systems. Among other changes, I reviewed and implemented big parts of the Java standard library. Since then I did not do any bigger Java coding.'
  }, 'JavaScript': {
    when: 2024, depth: 3,
    desc: 'I love JavaScript for its ubiquity and flexibility. I use it for server- and client-side web programming and for scripting, occasionally, but I’ve done desktop programming with ' + linkTo('Titanium', 'Titanium Appcelerator') + ' as well.'
  }, 'Jenkins': {
    when: 2016, depth: 1
  }, 'JVM': {
    when: 2009, depth: 2,
    desc: 'During my studies I made big contributions to a ' + linkTo('C', 'C-based') + ' JVM targetting embedded systems. For this work I read the whole JVM Spec several times.'
  }, 'jQuery': {
    when: 2016, depth: 2,
    desc: 'I used jQuery for most of my client-side JavaScript needs. In 2011, I helped migrating ' + linkTo('DokuWiki', 'DokuWiki’s') + ' JavaScript code to jQuery and ' + linkTo('jQuery UI') + '. A ' + linkTo('Titanium', 'Titanium Desktop') + ' XML editing application I wrote made heavy use of jQuery. For ' + linkTo(['Examples', 'Hire Adrian Heine']) + ', I checked out ' + linkTo('Ender.js') + ' as a replacement.'
  }, 'jQuery UI': {
    when: 2016, depth: 3,
    desc: linkTo('MediaWiki') + ' and ' + linkTo('Wikibase') + ' use jQuery UI a lot. I have extensive experience fighting it and the bad code architecture it\'s widget system suggests. Also, ' + linkTo('DokuWiki', 'DokuWiki’s') + ' new ' + linkTo('JavaScript') + ' code uses jQuery UI for some elements.'
  }, 'Kohana': {
    when: 2013, depth: 1
  }, 'LaTeX': {
    when: 2024, depth: 2,
    desc: 'I write all my paperwork and presentations in LaTeX.'
  }, 'LDAP': {
    when: 2023, depth: 1,
    desc: 'I run LDAP on some of my servers and have some experience using the service.'
  }, 'Legacy code': {
    when: 2023, depth: 2,
    desc: 'I love working with legacy code. I\'m usually trying to get it testable first, then refactor as I need. I love the knowledge encoded in grown code, and I try to make use of that knowledge instead of just throwing it away by rewriting from scratch.'
  }, 'LESS': {
    when: 2012, depth: 1,
    desc: 'I used LESS for ' + linkTo(['Examples', 'Hire Adrian Heine']) + ' and once migrated ' + linkTo('DokuWiki', 'DokuWiki’s') + ' custom ' + linkTo('CSS') + ' build system to lessphp as an experiment.'
  }, 'MacOS X': {
    when: 2009, depth: 0
  }, 'MariaDB': {
    when: 2016, depth: 1
  }, 'MediaWiki': {
    when: 2016, depth: 3,
    desc: 'I have extensive experience running, using, hacking and extending MediaWiki.'
  }, 'Meteor': {
    when: 2013, depth: 0
  }, 'Mocha': {
    when: 2016, depth: 2
  }, 'MIME': {
    when: 2009, depth: 0
  }, 'MTOM': {
    when: 2009, depth: 0
  }, 'MySQL': {
    when: 2016, depth: 1
  }, 'Node.js': {
    when: 2024, depth: 1,
    desc: 'I love Node.js and use it for all my recent web development and scripting needs. For a client, I rewrote I/O-heavy ' + linkTo('PHP') + ' components of his server using Node.js. I’ve done some ' + linkTo('Etherpad lite') + ' hacking, and I wrote ' + linkTo(['Examples', 'Hire Adrian Heine'], 'this site') + ' and several other, unreleased projects using Node.js. When writing Web apps, I use ' + linkTo('Express') + ' and ' + linkTo('Pug') + '. I am constantly evaluating ' + linkTo('Derby.js') + ' and ' + linkTo('Meteor') + '.'
  }, 'nginx': {
    when: 2024, depth: 1,
    desc: 'I use nginx for all my web server needs. It proxies my ' + linkTo('Node.js', 'Node.js-based') + ' sites, thin-powered ' + linkTo('Ruby on Rails') + ' applications and even ' + linkTo('PHP') + ' sites.'
  }, 'npm': {
    when: 2024, depth: 1
  }, 'OAuth': {
    when: 2009, depth: 2
  }, 'OpenMicroBlogging': {
    when: 2009, depth: 3,
    desc: 'I wrote the library ' + linkTo(['Examples', 'libomb']) + ' which is one of the few OpenMicroBlogging implementations. OMB has been obsoleted by oStatus, though.'
  }, 'OpenID': {
    when: 2019, depth: 1
  }, 'OTRS': {
    when: 2007, depth: 1
  }, 'PHP': {
    when: 2023, depth: 3,
    desc: 'Probably most of my software development experience comes from my work with PHP. In <time>2009</time>, I wrote the library ' + linkTo(['Examples', 'libomb']) + ' for the microblogging software ' + linkTo('StatusNet') + '.</p><p>From <time>2009</time> till <time>2011</time>, my full-time job was focused on ' + linkTo('DokuWiki') + ' – core contributions, templates and plugins.</p><p>Moreover, I took a look at ' + linkTo('Kohana') + ' and did some hacking around ' + linkTo('WordPress') + ' including writing plugins and themes. In 2012, I used ' + linkTo('CakePHP') + ' for a customer. Since 2014, I\'ve been working a lot with PHP again, exploiting the type system improvements in recent versions and trying out ' + linkTo('HHVM') + '.'
  }, 'Phabricator': {
    when: 2016, depth: 1
  }, 'Playwright': {
    when: 2024, depth: 1
  }, 'Postfix': {
    when: 2023, depth: 1,
    desc: 'Postfix together with ' + linkTo('Dovecot') + ' powers my self-administered mail server used by a small handful of people.'
  }, 'PostgreSQL': {
    when: 2016, depth: 1
  }, 'Python': {
    when: 2023, depth: 2
  }, 'QUnit': {
    when: 2016, depth: 1
  }, 'React': {
    when: 2023, depth: 2
  }, 'RegExp': {
    when: 2023, depth: 2,
    desc: 'I love regular expressions. Often, my first solution to a string parsing problem is a regular expression (as long as it is <a href="http://stackoverflow.com/a/1732454/55965" title="»Have you tried using an XML parser instead?« on Stack Overflow">not HTML</a>.'
  }, 'Require.js': {
    when: 2013, depth: 1
  }, 'Responsive': {
    when: 2024, depth: 2,
    desc: 'When I first heard of responsive design, it struck me as a great answer to the huge diversity of clients out there. I like the constraints it puts on minimalism and strict separation of content, presentation and behaviour – ' + linkTo('HTML') + ', ' + linkTo('CSS') + ' and ' + linkTo('JavaScript', 'JS') + '.</p><p>' + linkTo(['Examples', 'Hire Adrian Heine']) + ' features a tiny bit of responsiveness. I did not use pixel- or device-based breakpoints, but rather went <a href="http://www.jordesign.com/blog/responsive-breakpoints-from-the-content-out/" title="Jordesign on »Responsive Breakpoints from the Content Out«">from the content out</a>.'
  }, 'Restify': {
    when: 2013, depth: 1
  }, 'Ruby': {
    when: 2014, depth: 1
  }, 'Ruby on Rails': {
    when: 2014, depth: 1
  }, 'Rust': {
    when: 2023, depth: 2
  }, 'Scala': {
    when: 2013, depth: 0
  }, 'Scrum': {
    when: 2016, depth: 2
  }, 'Selenium': {
    when: 2016, depth: 1
  }, 'Sentry': {
    when: 2013, depth: 1
  }, 'Sequelize': {
    when: 2013, depth: 1
  }, 'Serde': {
    when: 2023, depth: 1
  }, 'Sinon.js': {
    when: 2016, depth: 1
  }, 'Shell': {
    when: 2023, depth: 1
  }, 'SOAP': {
    when: 2023, depth: 2
  }, 'Solaris': {
    when: 2009, depth: 0
  }, 'StatusNet': {
    when: 2009, depth: 2
  }, 'SQL': {
    when: 2016, depth: 1
  }, 'SQLite': {
    when: 2016, depth: 1
  }, 'Subversion': {
    when: 2011, depth: 1
  }, 'Test-driven': {
    when: 2024, depth: 2
  }, 'Titanium': {
    when: 2012, depth: 2
  }, 'TypeScript': {
    when: 2023, depth: 2
  }, 'Underscore.js': {
    when: 2016, depth: 1,
    desc: 'Not much to say about it: it’s great, I use it.'
  }, 'vim': {
    when: 2024, depth: 1,
    desc: 'I use vim for everything, but I’m still stuck with rather basic editing functionality.'
  }, 'Visual C++': {
    when: 2009, depth: 0
  }, 'VxWorks': {
    when: 2009, depth: 0
  }, 'Vue.js': {
    when: 2024, depth: 1
  }, 'Wikibase': {
    when: 2017, depth: 3,
    desc: 'I used to be one of the main developers of Wikibase.'
  }, 'Wikidata': {
    when: 2017, depth: 1
  }, 'Wikipedia': {
    when: 2017, depth: 3,
    desc: 'I used to be an admin at the German Wikipedia and at Wikimedia Commons, wrote honored articles at the German Wikipedia and was a member of the German e-mail support and response team.'
  }, 'Windows': {
    when: 2012, depth: 1
  }, 'WordPress': {
    when: 2022, depth: 1,
    desc: 'I maintain several WordPress installations, made some theming efforts and wrote WordPress plugins.'
  }, 'XML': {
    when: 2023, depth: 2
  }
};

Object.keys(module.exports).forEach(function (skillName) {
  let skill = module.exports[skillName];
  skill.age = Math.floor(2 * Math.log(2024 - skill.when + 1));
});
