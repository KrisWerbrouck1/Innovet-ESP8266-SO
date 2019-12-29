module.exports = {
  title: 'Innovet-ESP8266-SO',
  description: 'cursus rond de ESP8266 voor Innovet',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Company', link: 'http://sint-rembert.be/' },
      { text: 'License', link: '/LICENSE.md' },
    ],
    sidebar: [
      ['/', 'Home'],
      ['/inleiding/', 'Inleiding'],
      ['/pinlayout/', 'Pinlayout'],
      ['/basisprogrammas/', 'Basisprogrammas'],
      ['/http-en-html/', 'HTTP en HTML'],
      [
        '/microcontroller-als-simpele-webserver/',
        'Microcontroller als simpele webserver'
      ],
      ['/get-request/', 'GET-request'],
      ['/post-request/', 'POST-request']
    ],
    repo: 'https://github.com/KrisWerbrouck1/Innovet-ESP8266-SO.git',
    docsDir: 'docs',
    docsBranch: 'master'
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-zooming', {
      // selector for images that you want to be zoomable
      // default: '.content img'
      selector: 'img',

      // make images zoomable with delay after entering a page
      // default: 500
      // delay: 1000,

      // options of zooming
      // default: {}
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
  ],
}
