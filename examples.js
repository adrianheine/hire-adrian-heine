var lib = require('./lib'),
    linkTo = lib.linkTo.bind(undefined, 'Examples');

    examples = {
        'Hire Adrian Lang': {
            desc: 'I built »Hire Adrian Lang« in January 2012. It is powered by a ' + linkTo(['Skills', 'NodeJS']) + ' server using the ' + linkTo(['Skills', 'Express'], 'Express web framework') + ' with ' + linkTo(['Skills', 'Jade'], 'Jade templates') + ' and proxied by a ' + linkTo(['Skills', 'nginx']) +  ' on a ' + linkTo(['Skill', 'Debian']) + ' server. I used ' + linkTo(['Skills', 'jQuery']) + ' and the ' + linkTo(['Skills', 'HTML5'], 'HTML5 History API') + ' for providing a smoother navigation in modern browsers.</p><p>Sketching, doing a concept, coding and writing the texts took me about 20 hours.',
            links: {github: 'adrianlang/hire-adrian-lang'}
        },
        'partial.js': {
            desc: 'Partial.js is a toolkit for partial function application in ' + linkTo(['Skills', 'JavaScript']) + '. I wrote a <a href="https://ada.adrianlang.de/partial-application-js" title="The blog post »Partial function application in JavaScript«">blog post</a> on this subject in June 2011 and did two <a href="https://adrianlang.de/talks/partial2.pdf" title="Talk on partial function application in JavaScript">talks</a> on partial function application in JavaScript and partial.js at the Berlin and Hamburg JavaScript user groups.',
            links: {github: 'adrianlang/partial-js'}
        },
        'libomb': {
            desc: 'Summer 2009',
            links: {gitorious: 'libomb'}
        }
    };

module.exports = {};

for (var example in examples) {
    if (examples.hasOwnProperty(example)) {
        module.exports[lib.id(example)] = {
            desc: examples[example].desc,
            title: example,
            links: examples[example].links,
            longTitle: lib.longTitle('Examples', example)
        };
    }
}
