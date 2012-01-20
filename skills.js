var lib = require('./lib'),
    linkTo = lib.linkTo.bind(undefined, 'Skills');

/*
 * 1 +
 * Actuality (2) (>1 year ago, <1 year ago, daily),
 * Depth of usage (3) (Barely, Sorta normal usecase, Quite some diggin, Wizardry)
 * Hipness (1) (Whatever, Paint it big!)
 */
var skills = { 'Apache': {score: 1 + 2 + 1,
                          desc: 'Apache has been my first choice for web servers for several years. Lately, I started investigating ' + linkTo('nginx') + ' as well.</p><p>I successfully deployed web applications with Apache using ' + linkTo('PHP', 'mod_php') + ', ' + linkTo('fcgid', 'mod_fcgid') + ' and ' + linkTo('Ruby on Rails', 'mod_passenger') + '.'}, // 4 (3)
  'Atmel': {score: 1 + 0 + 0, // 1 (1)
            desc: ''},
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
               desc: 'I am a DokuWiki core developer, contributed a big bunch of plugins and have extensive experience running and customizing DokuWiki.</p><p>In the last year, I put much work into the migration from our plain-DOM JavaScript codebase to ' + linkTo('jQuery', 'jQuery-based') + ' code, including ' + linkTo('jQuery UI') + '.'},
  'Dovecot': {score: 1 + 1 + 1, // 3 (2)
              desc: 'Dovecot together with ' + linkTo('Postfix') + ' powers my self-administered mail server used by a small handful of people.'},
  'Etherpad lite': {score: 1 + 1 + 2, // 4
                   },
  'Express': {score: 1 + 2 + 1, // 4 (4)
              desc: 'I used the ' + linkTo('NodeJS') + ' web framework Express for two sites: ' + linkTo(['Examples', 'Hire Adrian Lang'], 'This one') + ' and a relaunch for Piratenkompass, ' + linkTo('Etherpad lite')
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
              desc: 'PrjEuler, papers'
             },
  'HTML': {score: 1 + 2 + 2, // 5 (5)
          },
  'HTML5': {score: 1 + 1 + 1, // 3
           },
  'Jade': {score: 1 + 2 + 2, // 5 (4)
          },
  'Java': {score: 1 + 0 + 2, // 3 (2)
          },
  'JavaScript': {score: 1 + 2 + 3 + 1, // 7 (7)
                 desc: 'I love JavaScript for its ubiquity and flexibility. I use it for server- and client-side web programming and for scripting, occasionally, but I’ve done desktop programming with ' + linkTo('Titanium', 'Titanium Appcelerator') + ' as well.'},
  'JVM': {score: 1 + 0 + 2, // 3 (2)
         },
  'jQuery': {score: 1 + 2 + 2, // 5 (6)
             desc: 'jQuery UI, DokuWiki, Titanium' + linkTo(['Examples', 'Hire Adrian Lang'])
            },
  'jQuery UI': {score: 1 + 1 + 1, // 3
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
  'OpenMicroBlogging': {score: 1 + 0 + 3, // 4 (2)
          },
  'OpenID': {score: 1 + 1 + 1, // 3 (2)
          },
  'OTRS': {score: 1 + 1 + 1, // 3 (1)
          },
  'PHP': {score: 1 + 2 + 3, // 6 (5)
          desc: linkTo('StatusNet') + ', ' + linkTo('DokuWiki') + linkTo(['Examples', 'libomb'])
         },
  'Postfix': {score: 1 + 1 + 1, // 3 (2)
             },
  'RegExp': {score: 1 + 2 + 2, // 5 (4)
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
  'StatusNet': {score: 1 + 0 + 2, // 3
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
        module.exports[lib.id(skill)] = {
            score: skills[skill].score,
            desc: skills[skill].desc || 'No description yet, sorry.',
            title: skill,
            longTitle: lib.longTitle('Skills', skill)
        };
    }
}
