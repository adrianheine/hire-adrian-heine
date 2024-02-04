"use strict";

var lib = require('../lib'),
  linkTo = lib.linkTo.bind(undefined, 'Examples');

module.exports = {
  'Hire Adrian Heine': {
    desc: 'I built »Hire Adrian Heine« in <time datetime="2012-01">January 2012</time>. It is powered by a ' + linkTo(['Skills', 'Node.js']) + ' server using the ' + linkTo(['Skills', 'Express'], 'Express web framework') + ' with ' + linkTo(['Skills', 'Pug'], 'Pug templates') + ' and proxied by ' + linkTo(['Skills', 'nginx']) + ' on a ' + linkTo(['Skills', 'Debian']) + ' server. I initially used ' + linkTo(['Skills', 'Ender.js']) + ' but since moved to plain browser APIs.</p><p>I used ' + linkTo(['Skills', 'LESS']) + ' for ' + linkTo(['Skills', 'CSS']) + ' generation. The style has certain ' + linkTo('Responsive', 'responsive design') + ' features. For those, I did not use pixel- or device-based breakpoints, but rather went <a href="http://www.jordesign.com/blog/responsive-breakpoints-from-the-content-out/" title="Jordesign on »Responsive Breakpoints from the Content Out«">from the content out</a>.</p><p>In <time datetime="2024-02">2024</time>, I updated the styling to modern CSS, introducing fluid typography and implicit responsiveness without breakpoints. For this, I took advantage of viewport units and flexbox. I also switched to ' + linkTo(['Skills', 'Sass']) + '.',
    links: {github: 'adrianheine/hire-adrian-heine'},
    year: '2012/2024',
    shortdesc: 'nodejs vanillajs (s)css'
  },
  'Memory des Prekariats': {
    desc: 'I co-developed this little game in the course of a hackathon. It features a small handwritten route-based action dispatcher, performant view updates through diffDOM and physics-simulated elements using Springy.js.',
    links: { live: 'https://memory.adrianheine.de', git: 'https://git.adrianheine.de/adrian/coding-precarity' },
    year: 2020,
    shortdesc: 'vanillajs singleplage css'
  },
  'gntag': {
    desc: 'gntag is a sample project demonstrating my ' + linkTo(['Skills', 'Rust']) + ' skills. It is a simple actor-based simulation of the tag game with a terminal user interface.',
    links: { git: 'https://git.adrianheine.de/adrian/gntag' },
    year: 2021,
    shortdesc: 'rust tui agent-based'
  },
  'Space-Board': {
    desc: 'Space-Board is a sample project demonstrating my ' + linkTo(['Skills', 'Vue.js']) + ' and ' + linkTo(['Skills', 'CSS']) + ' skills. The CSS implementation makes use of grid, flexbox, logical units and values, dynamic viewport units, fluid typography, media feature detection and container queries. It implements a mobile-first responsive design with four breakpoints. There are several state transitions and custom shaky, glitchy and flickering animations. The whole project with six functional widgets is implemented in less than 300 lines of JavaScript and less than 500 lines of CSS.',
    links: {github: 'adrianheine/space-board'},
    year: 2024,
    shortdesc: 'vuejs singlepage css'
  }
};
