"use strict";
var lib = require('../lib'),
  linkTo = lib.linkTo.bind(undefined, 'Skills');

/*
 * 1 +
 * Actuality (0-2) (>1 year ago, <1 year ago, daily),
 * Depth of usage (0-3) (Barely, Sorta normal usecase, Quite some diggin, Wizardry)
 * Hipness (0-1) (Whatever, Paint it big!)
 */
module.exports = {
  'Agile': {
    score: 1 + 2 + 1,
    desc: ''
  }, 'Angular': {
    score: 1 + 0 + 1,
    desc: ''
  }, 'Apache': {
    score: 1 + 1 + 1,
    desc: 'Apache has been my first choice for web servers for several years. Since then, I switch to ' + linkTo('nginx') + ' for everything.</p><p>I successfully deployed web applications with Apache using ' + linkTo('PHP', 'mod_php') + ', ' + linkTo('fcgid', 'mod_fcgid') + ' and ' + linkTo('Ruby on Rails', 'mod_passenger') + '.'
  }, 'Atmel': {
    score: 1 + 0 + 0,
    desc: 'During my studies I made several contributions to a ' + linkTo('C', 'C-based') + ' ' + linkTo('JVM', 'Java Virtual Machine') + ' targetting Atmel systems.'
  }, 'Backbone.js': {
    score: 1 + 1 + 1
  }, 'C': {
    score: 1 + 1 + 2,
    desc: 'I read and write C code for more than 10 years. The biggest project I participated in was a C-based ' + linkTo('JVM', 'Java Virtual Machine') + ' targetting ' + linkTo('Atmel') + ' systems. I haven’t been much of a C hacker lately, but I’m still used to browsing through and editing code like the ' + linkTo('PHP') + ' interpreter or other C-based monsters.'
  }, 'CakePHP': {
    score: 1 + 0 + 2,
    desc: 'CakePHP 1.3 is something I had to use for a customer. I know how to use it, how to look something up in the source or documentation and how to stay alive.'
  }, 'CoffeeScript': {
    score: 1 + 0 + 2
  }, 'Compound.js': {
    score: 1 + 0 + 2
  }, 'CouchDB': {
    score: 1 + 0 + 2,
    desc: 'I use CouchDB for some private projects. I love the way it makes me think about database performance, and that it is completely about ' + linkTo('JavaScript') + ' and ' + linkTo('HTTP') + '.'
  }, 'C++': {
    score: 1 + 0 + 1,
    desc: 'Many C++ concepts like <abbr title="Template Meta-Programming">TMP</abbr> or operator overloading strike me as elegant or powerful (and sometimes even both at the same time). Unfortunately, my practical experience is limited to some small projects using g++ and ' + linkTo('Visual C++') + '.'
  }, 'CSS': {
    score: 1 + 2 + 1,
    desc: 'CSS is a part of my daily work, and I apply my usual attention to it. Thus, I know my units, use CSS3 features where needed and possible and try to stay out of specificity hell. Since my ' + linkTo('HTML') + ' is semantic and non-representational, there is quite some work to do for CSS.</p><p>For ' + linkTo(['Examples', 'Hire Adrian Heine']) + ', I used ' + linkTo('LESS') + ' for CSS generation and tried to apply a loose SMACSS approach. The style has certain ' + linkTo('Responsive', 'responsive design') + ' features and uses CSS3 features like media queries, box-sizing and background-size.'
  }, 'D3.js': {
    score: 1 + 0 + 1
  }, 'darcs': {
    score: 1 + 0 + 0,
    desc: 'When I started contributing to ' + linkTo('DokuWiki') + ', it used darcs as a revision control system, but soon changed to ' + linkTo('git') + '.'
  }, 'DB2': {
    score: 1 + 0 + 1
  }, 'Debian': {
    score: 1 + 2 + 2,
    desc: 'Debian ' + linkTo('GNU/Linux') + ' is the only operating system I use extensively. It powers my workstation, notebooks and servers. Depending on the use-case I run every available suite from stable to experimental and combinations of them.</p><p>I am accustomed to building and hacking packages myself from time to time, I even created a dpkg package myself once or twice. I recommended it to several people and helped them installing and maintaining it.'
  }, 'Derby.js': {
    score: 1 + 0 + 1
  }, 'DIME': {
    score: 1 + 0 + 0
  }, 'DokuWiki': {
    score: 1 + 0 + 3,
    desc: 'I used to be a DokuWiki core developer, contributed a big bunch of plugins and have extensive experience running and customizing DokuWiki.</p><p>In <time datetime="2011">2011</time>, I put much work into the migration from DokuWiki\'s plain-DOM JavaScript codebase to ' + linkTo('jQuery', 'jQuery-based') + ' code, including ' + linkTo('jQuery UI') + '.'
  }, 'Dovecot': {
    score: 1 + 1 + 1,
    desc: 'Dovecot together with ' + linkTo('Postfix') + ' powers my self-administered mail server used by a small handful of people.'
  }, 'Ender.js': {
    score: 1 + 0 + 1,
    desc: 'I recently started using Ender.js-based component builds as a replacement for monolithic libraries like ' + linkTo('jQuery') + '. On ' + linkTo(['Examples', 'Hire Adrian Heine'], 'this site') + ', Ender.js with the jeesh and reqwest is used for DOM manipulation and XHRs.'
  }, 'Etherpad lite': {
    score: 1 + 0 + 2,
    desc: 'I run an Etherpad lite instance, contributed ' + linkTo('DokuWiki') + ' export and fixed a security issue. In 2012, I wrote a custom single sign-on adapter for an etherpad lite instance.'
  }, 'Express': {
    score: 1 + 1 + 2,
    desc: 'I used the ' + linkTo('Node.js') + ' web framework Express in several projects. ' + linkTo(['Examples', 'Hire Adrian Heine'], 'This website') + ' is powered by Express, ' + linkTo('Etherpad lite') + ' uses Express as well, and I also used the frameworks ' + linkTo('Compound.js') + ' and ' + linkTo('Derby.js') + ', which both use Express. I also have experience with ' + linkTo('Restify') + ', which mimicks Express’ API.'
  }, 'fcgid': {
    score: 1 + 1 + 1
  }, 'Flash': {
    score: 1 + 0 + 1
  }, 'git': {
    score: 1 + 2 + 2,
    desc: 'git is my preferred revision control system since around 2008. I use it for every non-trivial project I start from software to Diablo II save games to presentations or applications.</p><p>I consider myself a reasonably advanced git user – features like bisect, blame, hunk index adding or rebasing are part of my daily routine. Aside from the gory details, I am able to develop git-based workflows building on tags and different kinds of branches.'
  }, 'GDB': {
    score: 1 + 1 + 1
  }, 'GNU/Linux': {
    score: 1 + 2 + 1,
    desc: 'I exclusively run ' + linkTo('Debian', 'Debian GNU/Linux') + '.'
  }, 'Grunt.js': {
    score: 1 + 1 + 1
  }, 'Haskell': {
    score: 1 + 1 + 0,
    desc: 'I love Haskell and solved <a href="https://projecteuler.net/progress=adrianlang">50 Project Euler problems</a> with it. Still, I consider everything above the basic concepts to be really black magic and whenever I read papers on or using Haskell, I occasionally reach a point where I have to concentrate really hard or even read some 100 pages of background information.'
  }, 'HHVM': {
    score: 1 + 2 + 1,
    desc: 'I\'m running HHVM as part of my development environment; I submitted bugs and got patches merged.'
  }, 'HTML': {
    score: 1 + 2 + 2,
    desc: 'HTML is part of my everyday work. I like my HTML clean, semantic and valid. That’s why I’m hoping for ' + linkTo('HTML5') + ' goodness.'
  }, 'HTML5': {
    score: 1 + 1 + 1,
    desc: 'I closely follow the development around HTML and read about new features as they come up. In ' + linkTo(['Examples', 'Hire Adrian Heine']) + ', I used a HTML5 template and explored the new history API.'
  }, 'HTTP': {
    score: 1 + 2 + 1,
    desc: 'My first experience with HTTP was when I used ' + linkTo('SOAP') + '. Since then, I pity the current state of HTTP usage as barely more than a stupid URL retrieving or data posting protocol. Lately, I started to like REST and its extensive use of HTTP features.'
  }, 'I18n': {
    score: 1 + 1 + 1,
    desc: 'I like the challenges that come from supporting more than ASCII letters written from left to right.'
  }, 'Jade': {
    score: 1 + 1 + 2,
    desc: 'I use Jade in my ' + linkTo('Node.js') + ' web applications together with ' + linkTo('Express') + '. I even got a <a href="https://github.com/visionmedia/jade/commit/bef63b3ebadfcbf2b079831e58d3b959123bd5ce" title="My patch for Jade">small patch</a> landed.'
  }, 'Java': {
    score: 1 + 0 + 2,
    desc: 'During my studies I made big contributions to a ' + linkTo('JVM') + ' targetting embedded systems. Among other changes, I reviewed and implemented big parts of the Java standard library. Since then I did not do any bigger Java coding.'
  }, 'JavaScript': {
    score: 1 + 2 + 3 + 1,
    desc: 'I love JavaScript for its ubiquity and flexibility. I use it for server- and client-side web programming and for scripting, occasionally, but I’ve done desktop programming with ' + linkTo('Titanium', 'Titanium Appcelerator') + ' as well.'
  }, 'JVM': {
    score: 1 + 0 + 2,
    desc: 'During my studies I made big contributions to a ' + linkTo('C', 'C-based') + ' JVM targetting embedded systems. For this work I read the whole JVM Spec several times.'
  }, 'jQuery': {
    score: 1 + 2 + 2,
    desc: 'I use jQuery for most of my client-side JavaScript needs. In 2011, I helped migrating ' + linkTo('DokuWiki', 'DokuWiki’s') + ' JavaScript code to jQuery and ' + linkTo('jQuery UI') + '. A ' + linkTo('Titanium', 'Titanium Desktop') + ' XML editing application I wrote made heavy use of jQuery. For ' + linkTo(['Examples', 'Hire Adrian Heine']) + ', I started using ' + linkTo('Ender.js') + ' as a replacement.'
  }, 'jQuery UI': {
    score: 1 + 2 + 3,
    desc: linkTo('MediaWiki') + ' and ' + linkTo('Wikibase') + ' use jQuery UI a lot. I have extensive experience fighting it and the bad code architecture it\'s widget system suggests. Also, ' + linkTo('DokuWiki', 'DokuWiki’s') + ' new ' + linkTo('JavaScript') + ' code uses jQuery UI for some elements.'
  }, 'Kohana': {
    score: 1 + 0 + 1
  }, 'LaTeX': {
    score: 1 + 1 + 2,
    desc: 'I write all my paperwork and presentations in LaTeX.'
  }, 'LDAP': {
    score: 1 + 1 + 1,
    desc: 'I run LDAP on some of my servers and have some experience using the service.'
  }, 'Legacy code': {
    score: 1 + 2 + 2,
    desc: 'I love working with legacy code. I\'m usually trying to get it testable first, then refactor as I need. I love the knowledge encoded in grown code, and I try to make use of that knowledge instead of just throwing it away by rewriting from scratch.'
  }, 'LESS': {
    score: 1 + 1 + 1,
    desc: 'I used LESS for ' + linkTo(['Examples', 'Hire Adrian Heine']) + ' and once migrated ' + linkTo('DokuWiki', 'DokuWiki’s') + ' custom ' + linkTo('CSS') + ' build system to lessphp as an experiment.'
  }, 'MacOS X': {
    score: 1 + 1 + 0
  }, 'MediaWiki': {
    score: 1 + 2 + 3,
    desc: 'I have extensive experience running, using, hacking and extending MediaWiki.'
  }, 'Meteor': {
    score: 1 + 0 + 0
  }, 'Mocha': {
    score: 1 + 1 + 2
  }, 'MIME': {
    score: 1 + 0 + 0
  }, 'MTOM': {
    score: 1 + 0 + 0
  }, 'MySQL': {
    score: 1 + 1 + 1
  }, 'Node.js': {
    score: 1 + 2 + 1,
    desc: 'I love Node.js and use it for all my recent web development and scripting needs. For a client, I rewrote I/O-heavy ' + linkTo('PHP') + ' components of his server using Node.js. I’ve done some ' + linkTo('Etherpad lite') + ' hacking, and I wrote ' + linkTo(['Examples', 'Hire Adrian Heine'], 'this site') + ' and several other, unreleased projects using Node.js. When writing Web apps, I use ' + linkTo('Express') + ' and ' + linkTo('Jade') + '. I am constantly evaluating ' + linkTo('Derby.js') + ' and ' + linkTo('Meteor') + '.'
  }, 'nginx': {
    score: 1 + 2 + 1, // 3 (1)
    desc: 'I use nginx for all my web server needs. It proxies my ' + linkTo('Node.js', 'Node.js-based') + ' sites, thin-powered ' + linkTo('Ruby on Rails') + ' applications and even ' + linkTo('PHP') + ' sites.'
  }, 'OAuth': {
    score: 1 + 0 + 2
  }, 'OpenMicroBlogging': {
    score: 1 + 0 + 3,
    desc: 'I wrote the library ' + linkTo(['Examples', 'libomb']) + ' which is one of the few OpenMicroBlogging implementations. OMB has been obsoleted by oStatus, though.'
  }, 'OpenID': {
    score: 1 + 1 + 1
  }, 'OTRS': {
    score: 1 + 1 + 1
  }, 'PHP': {
    score: 1 + 2 + 3,
    desc: 'Probably most of my software development experience comes from my work with PHP. In <time>2009</time>, I wrote the library ' + linkTo(['Examples', 'libomb']) + ' for the microblogging software ' + linkTo('StatusNet') + '.</p><p>From <time>2009</time> till <time>2011</time>, my full-time job was focused on ' + linkTo('DokuWiki') + ' – core contributions, templates and plugins.</p><p>Moreover, I took a look at ' + linkTo('Kohana') + ' and did some hacking around ' + linkTo('WordPress') + ' including writing plugins and themes. In 2012, I used ' + linkTo('CakePHP') + ' for a customer. Since 2014, I\'ve been working a lot with PHP again, exploiting the type system improvements in recent versions and trying out ' + linkTo('HHVM') + '.'
  }, 'Postfix': {
    score: 1 + 1 + 1,
    desc: 'Postfix together with ' + linkTo('Dovecot') + ' powers my self-administered mail server used by a small handful of people.'
  }, 'PostgreSQL': {
    score: 1 + 1 + 1
  }, 'QUnit': {
    score: 1 + 1 + 1
  }, 'React.js': {
    score: 1 + 1 + 1
  }, 'RegExp': {
    score: 1 + 2 + 2,
    desc: 'I love regular expressions. Often, my first solution to a string parsing problem is a regular expression (as long as it is <a href="http://stackoverflow.com/a/1732454/55965" title="»Have you tried using an XML parser instead?« on Stack Overflow">not HTML</a>.'
  }, 'Require.js': {
    score: 1 + 0 + 1
  }, 'Responsive': {
    score: 1 + 1 + 2,
    desc: 'When I first heard of responsive design, it struck me as a great answer to the huge diversity of clients out there. I like the constraints it puts on minimalism and strict separation of content, presentation and behaviour – ' + linkTo('HTML') + ', ' + linkTo('CSS') + ' and ' + linkTo('JavaScript', 'JS') + '.</p><p>' + linkTo(['Examples', 'Hire Adrian Heine']) + ' features a tiny bit of responsiveness. I did not use pixel- or device-based breakpoints, but rather went <a href="http://www.jordesign.com/blog/responsive-breakpoints-from-the-content-out/" title="Jordesign on »Responsive Breakpoints from the Content Out«">from the content out</a>.'
  }, 'Restify': {
    score: 1 + 0 + 1
  }, 'Ruby': {
    score: 1 + 1 + 1
  }, 'Ruby on Rails': {
    score: 1 + 0 + 1
  }, 'Rust': {
    score: 1 + 1 + 1
  }, 'Scala': {
    score: 1 + 0 + 0
  }, 'Scrum': {
    score: 1 + 2 + 2
  }, 'Sequelize': {
    score: 1 + 0 + 1
  }, 'Sinon.js': {
    score: 1 + 2 + 1
  }, 'Shell': {
    score: 1 + 2 + 1
  }, 'SOAP': {
    score: 1 + 0 + 2
  }, 'Solaris': {
    score: 1 + 0 + 0
  }, 'StatusNet': {
    score: 1 + 0 + 2
  }, 'SQL': {
    score: 1 + 1 + 1
  }, 'SQLite': {
    score: 1 + 1 + 1
  }, 'Subversion': {
    score: 1 + 0 + 1
  }, 'Test-driven': {
    score: 1 + 2 + 2
  }, 'Titanium': {
    score: 1 + 0 + 2
  }, 'Twitter Bootstrap': {
    score: 1 + 1 + 2
  }, 'Underscore.js': {
    score: 1 + 1 + 2,
    desc: 'Not much to say about it: it’s great, I use it.'
  }, 'vim': {
    score: 1 + 2 + 1,
    desc: 'I use vim for everything, but I’m still stuck with rather basic editing functionality.'
  }, 'Visual C++': {
    score: 1 + 0 + 0
  }, 'VxWorks': {
    score: 1 + 0 + 0
  }, 'Wikibase': {
    score: 1 + 2 + 3,
    desc: 'I am one of the main developers of Wikibase.'
  }, 'Wikidata': {
    score: 1 + 1 + 1
  }, 'Wikipedia': {
    score: 1 + 1 + 3,
    desc: 'I used to be an admin at the German Wikipedia and at Wikimedia Commons, wrote honored articles at the German Wikipedia and was a member of the German e-mail support and response team.'
  }, 'Windows': {
    score: 1 + 0 + 1
  }, 'WordPress': {
    score: 1 + 1 + 1,
    desc: 'I maintain several WordPress installations, made some theming efforts and wrote WordPress plugins.'
  }, 'XML': {
    score: 1 + 1 + 2
  }, 'XP': {
    score: 1 + 1 + 0
  }
};

Object.keys(module.exports).forEach(function (skillName) {
  let skill = module.exports[skillName];
  skill.desc = skill.desc || 'No description yet, sorry.';
});
