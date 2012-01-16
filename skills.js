var lib = require('./lib');

var skills = { 'Apache': {score: 3},
  'Atmel': {score: 1},
  'C': {score: 3},
  'C++': {score: 1},
  'CSS': {score: 5},
  'DB2': {score: 1},
  'Debian': {score: 4},
  'DIME': {score: 1},
  'DokuWiki': {score: 4},
  'Dovecot': {score: 2},
  'Express': {score: 4},
  'fcgid': {score: 1},
  'Flash': {score: 1},
  'git': {score: 5},
  'GNU/Linux': {score: 3},
  'Haskell': {score: 2},
  'HTML': {score: 5},
  'Jade': {score: 4},
  'Java': {score: 2},
  'JavaScript': {score: 7},
  'JVM': {score: 2},
  'jQuery': {score: 6},
  'Kohana': {score: 1},
  'LaTeX': {score: 3, desc: 'I write all my paperwork and presentations in LaTeX'},
  'LDAP': {score: 3},
  'MacOS X': {score: 2},
  'MediaWiki': {score: 2},
  'MIME': {score: 1},
  'MTOM': {score: 1},
  'MySQL': {score: 4},
  'NodeJS': {score: 3},
  'nginx': {score: 1},
  'OAuth': {score: 3},
  'OMB': {score: 2},
  'OpenID': {score: 2},
  'OTRS': {score: 1},
  'PHP': {score: 5},
  'Postfix': {score: 2},
  'RegExp': {score: 4},
  'Ruby': {score: 1},
  'Scala': {score: 1},
  'Scrum': {score: 2},
  'Shell': {score: 3},
  'SOAP': {score: 2},
  'Solaris': {score: 1},
  'SQLite': {score: 2},
  'Titanium': {score: 3},
  'Underscore.js': {score: 3},
  'vim': {score: 4},
  'Visual C++': {score: 1},
  'VxWorks': {score: 1},
  'Wikipedia': {score: 3},
  'Windows': {score: 2},
  'WordPress': {score: 2},
  'XML': {score: 3},
  'XP': {score: 1}
};

module.exports = {};

for (var skill in skills) {
    if (skills.hasOwnProperty(skill)) {
        module.exports[skill.toLowerCase().replace(/ /g, '_').replace(/\//g, '-')] = {
            score: skills[skill].score,
            desc: skills[skill].desc,
            title: skill,
            longTitle: lib.longTitle('Skills', skill)
        };
    }
}
