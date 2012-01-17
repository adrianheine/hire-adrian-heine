var lib = require('./lib'),
    skillTitle = lib.longTitle.bind(undefined, 'Skills');

/*
 * 1 +
 * Actuality (2) (>1 year ago, <1 year ago, daily),
 * Depth of usage (3) (Barely, Sorta normal usecase, Quite some diggin, Wizardry)
 * Hipness (1) (Whatever, Paint it big!)
 */
var skills = { 'Apache': {score: 1 + 2 + 1}, // 4 (3)
  'Atmel': {score: 1 + 0 + 0, // 1 (1)
        },
  'C': {score: 1 + 1 + 2, // 4 (3)
        },
  'C++': {score: 1 + 1 + 1, // 3 (1)
        },
  'CSS': {score: 1 + 2 + 1, // 4 (4)
        },
  'darcs': {score: 1 + 1 + 0, // 2 (2)
        },
  'DB2': {score: 1 + 1 + 0, // 2 (1)
        },
  'Debian': {score: 1 + 2 + 2, // 5 (4)
             desc: 'Debian GNU/Linux is the only operating system I use extensively. It powers my workstation, netbook and servers. Depending on the use-case I run every available suite from stable to experimental and combinations of them.</p><p>I am accustomed to building and hacking packages myself from time to time, I even created a dpkg package myself once or twice.'},
  'DIME': {score: 1 + 0 + 0 // 1 (1)
        },
  'DokuWiki': {score: 1 + 2 + 3, // 6 (4)
               desc: 'I am a DokuWiki core developer, contributed a big bunch of plugins and have extensive experience running and customizing DokuWiki.'},
  'Dovecot': {score: 1 + 1 + 1, // 3 (2)
              desc: 'Dovecot together with <a href="/skills/postfix" title="' + lib.htmlEntities(skillTitle('Postfix')) + '">Postfix</a> powers my self-administered mail server used by a small handful of people.'},
  'Express': {score: 1 + 2 + 1, // 4 (4)
        },
  'fcgid': {score: 1 + 1 + 0, // 2 (1)
        },
  'Flash': {score: 1 + 0 + 1, // 2 (1)
        },
  'git': {score: 1 + 2 + 2, // 5 (5)
          desc: 'git is my preferred revision control system since around 2008. I use it for every non-trivial project I start from software to Diablo II save games to presentations or applications.</p><p>I consider myself a reasonably advanced git user – features like bisect, blame, hunk index adding or rebasing are part of my daily routine. Aside from the gory details, I am able to develop git-based workflows building on tags and different kinds of branches.'},
  'GNU/Linux': {score: 1 + 2 + 1, // 4 (3)
          },
  'Haskell': {score: 1 + 1 + 0, // 2 (2)
             },
  'HTML': {score: 1 + 2 + 2, // 5 (5)
          },
  'Jade': {score: 1 + 2 + 2, // 5 (4)
          },
  'Java': {score: 1 + 0 + 2, // 3 (2)
          },
  'JavaScript': {score: 1 + 2 + 3 + 1, // 7 (7)
                 desc: 'I love JavaScript for its ubiquity and flexibility. I use it for server- and client-side web programming and for scripting, occasionally, but I’ve done desktop programming with <a href="/skills/titanium" title="' + lib.htmlEntities(skillTitle('Titanium')) + '">Titanium Appcelerator</a> as well.'},
  'JVM': {score: 1 + 0 + 2, // 3 (2)
         },
  'jQuery': {score: 1 + 2 + 2, // 5 (6)
             desc: 'jQuery UI, DokuWiki, Titanium'
            },
  'Kohana': {score: 1 + 1 + 1, // 3 (1)
            },
  'LaTeX': {score: 1 + 1 + 2, // 4 (3)
            desc: 'I write all my paperwork and presentations in LaTeX.'},
  'LDAP': {score: 1 + 1 + 1, // 3 (3)
          },
  'MacOS X': {score: 1 + 1 + 0, // 2 (2)
          },
  'MediaWiki': {score: 1 + 0 + 2, // 3 (2)
          },
  'MIME': {score: 1 + 0 + 0, // 1 (1)
          },
  'MTOM': {score: 1 + 0 + 0, // 1 (1)
          },
  'MySQL': {score: 1 + 1 + 1, // 3 (4)
          },
  'NodeJS': {score: 1 + 1 + 1, // 3 (3)
          },
  'nginx': {score: 1 + 1 + 0, // 2 (1)
          },
  'OAuth': {score: 1 + 0 + 2, // 3 (3)
          },
  'OMB': {score: 1 + 0 + 3, // 4 (2)
          },
  'OpenID': {score: 1 + 1 + 1, // 3 (2)
          },
  'OTRS': {score: 1 + 1 + 1, // 3 (1)
          },
  'PHP': {score: 1 + 2 + 3, // 6 (5)
         },
  'Postfix': {score: 1 + 1 + 1, // 3 (2)
             },
  'RegExp': {score: 1 + 2 + 3, // 6 (4)
            },
  'Ruby': {score: 1 + 0 + 1, // 2 (1)
          },
  'Ruby on Rails': {score: 1 + 0 + 1, // 2 (1)
          },
  'Scala': {score: 1 + 1 + 0, // 2 (1)
          },
  'Scrum': {score: 1 + 1 + 0, // 2 (2)
          },
  'Shell': {score: 1 + 1 + 1, // 3 (3)
          },
  'SOAP': {score: 1 + 0 + 2, // 3 (2)
          },
  'Solaris': {score: 1 + 0 + 0, // 1 (1)
          },
  'SQL': {score: 1 + 1 + 1, // 3 (-)
         },
  'SQLite': {score: 1 + 1 + 1, // 3 (2)
         },
  'Subversion': {score: 1 + 0 + 1, // 2 (2)
                },
  'Titanium': {score: 1 + 0 + 2, // 3 (3)
              },
  'Underscore.js': {score: 1 + 2 + 2, // 5 (3)
              },
  'vim': {score: 1 + 2 + 1, // 4 (4)
         },
  'Visual C++': {score: 1 + 0 + 0, // 1 (1)
         },
  'VxWorks': {score: 1 + 0 + 0, // 1 (1)
             },
  'Wikipedia': {score: 1 + 0 + 3, // 4 (3)
               },
  'Windows': {score: 1 + 1 + 1, // 3 (2)
             },
  'WordPress': {score: 1 + 1.5 + 1.5, // 3 (2)
             },
  'XML': {score: 1 + 1 + 1 // 3 (3)
         },
  'XP': {score: 1 + 1 + 0, // 2 (1)
        }
};

module.exports = {};

for (var skill in skills) {
    if (skills.hasOwnProperty(skill)) {
        module.exports[skill.toLowerCase().replace(/ /g, '_').replace(/\//g, '-')] = {
            score: skills[skill].score,
            desc: skills[skill].desc,
            title: skill,
            longTitle: skillTitle(skill)
        };
    }
}
