"use strict";

var lib = require('../lib'),
    linkTo = lib.linkTo.bind(undefined, 'Examples');

module.exports = {
    'Hire Adrian Lang': {
        desc: 'I built »Hire Adrian Lang« in <time datetime="2012-01">January 2012</time>. It is powered by a ' + linkTo(['Skills', 'Node.js']) + ' server using the ' + linkTo(['Skills', 'Express'], 'Express web framework') + ' with ' + linkTo(['Skills', 'Jade'], 'Jade templates') + ' and proxied by a ' + linkTo(['Skills', 'nginx']) +  ' on a ' + linkTo(['Skill', 'Debian']) + ' server. I used ' + linkTo(['Skills', 'jQuery']) + ' and the ' + linkTo(['Skills', 'HTML5'], 'HTML5 History API') + ' for providing a smoother navigation in modern browsers.</p><p>Sketching, doing a concept, coding and writing the texts took me about 20 hours.',
        links: {github: 'adrianlang/hire-adrian-lang'}
    },
    'partial.js': {
        desc: 'Partial.js is a toolkit for partial function application in ' + linkTo(['Skills', 'JavaScript']) + '. I wrote a <a href="https://ada.adrianlang.de/partial-application-js" title="The blog post »Partial function application in JavaScript«">blog post</a> on this subject in <time datetime="2011-06">June 2011</time> and did two <a href="https://adrianlang.de/talks/partial2.pdf" title="Talk on partial function application in JavaScript">talks</a> on partial function application in JavaScript and partial.js at the Berlin and Hamburg JavaScript user groups.',
        links: {github: 'adrianlang/partial-js'}
    },
    'libomb': {
        desc: 'libomb is a ' + linkTo(['Skills', 'PHP']) + ' library implementing the ' + linkTo(['Skills', 'OpenMicroBlogging'], 'OpenMicroBlogging protocol') + '. I wrote it in <time datetime="2009">Summer 2009</time> and used it to replace the self-baked OMB implementation in ' + linkTo(['Skills', 'StatusNet']) + '.',
        links: {gitorious: 'libomb'}
    }
};
