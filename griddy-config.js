exports.siteMetadata = {
  title: `Griddy`,
  description: `Gallery & Portfolio of artist`,
  author: `@mustofaa_id`,
  siteUrl: `https://griddy.netlify.com/`, // For SEO. Must have / at the end
  primaryColor: `#ffffff`,
  icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
  trackingId: `UA-XXXXXXXXX-X`, // replace "UA-XXXXXXXXX-X" with your own Tracking ID
  sitemap: `sitemap.xml`, // sitemap file name (required)
  socialLink: [
    {
      name: 'Facebook',
      href: 'https://link.mustofa.id/fb',
      icon: 'facebook'
    },
    {
      name: 'Twitter',
      href: 'https://link.mustofa.id/fb',
      icon: 'pinterest'
    },
    {
      name: 'Artstation',
      href: 'https://link.mustofa.id/fb',
      icon: 'artstation'
    },
    {
      name: 'Deviantart',
      href: 'https://link.mustofa.id/fb',
      icon: 'deviantart'
    }
    // Social media available: facebook, instagram, twitter, artstation, behance, deviantart, dribbble
  ],
  menuHome: [
    // href should be match with file name in src/pages
    { name: 'Gallery', href: '/gallery', icon: 'image' },
    { name: 'Blog', href: '/blog', icon: 'book' },
    { name: 'Friend', href: '/friend', icon: 'heart' },
    { name: 'About', href: '/about', icon: 'user' }
  ],
  friends: [
    {
      name: 'Mustofa',
      siteUrl: 'https://mustofa.id',
      screenshot: 'https://cdn.staticaly.com/screenshot/mustofa.id?w=500&h=300',
      profilepic: 'https://cdn.statically.io/img/mustofa.id/static/logo-d7ffd794e4a7a9f2c6e97e0510c45358.png',
      description: 'I am Habib Mustofa, a Programmer from Indonesia. Typing Java and JavaScript code on Linux machine...',
      siteEngine: 'Gatsbyjs'
    },
    {
      name: 'Okitavera',
      siteUrl: 'https://okitavera.me',
      screenshot: 'https://cdn.staticaly.com/screenshot/okitavera.me?w=500&h=300',
      profilepic: 'https://cdn.statically.io/img/okitavera.me/assets/img/me.png',
      description: 'I am an Android Developer who focus on application performance and user experience...',
      siteEngine: '11ty'
    },
    {
      name: 'Epsy RNS',
      siteUrl: 'https://epsi-rns.gitlab.io',
      screenshot: 'https://cdn.staticaly.com/screenshot/epsi-rns.gitlab.io?w=500&h=300',
      profilepic: 'https://cdn.statically.io/img/epsi-rns.gitlab.io/assets/site/images/epsi-bulat.png',
      description: 'I am an open source enthusiast. This site is mainly discuss about web development, frontend, backend, and especially SSG (static site generator)',
      siteEngine: 'Hugo'
    },
    {
      name: 'Rania Amina',
      siteUrl: 'https://raniaamina.id',
      screenshot: 'https://cdn.staticaly.com/screenshot/raniaamina.id?w=500&h=300',
      profilepic: 'https://cdn.statically.io/img/raniaamina.id/images/avatar.png',
      description: 'RANIA AMINA jatuh cinta dengan dunia Free/Libre Open Source Software sejak masih duduk di bangku SMP dan sekarang mencoba untuk aktif berkontribusi di bidang FLOSS...',
      siteEngine: 'Hexo'
    },
    {
      name: 'BanditHijo',
      siteUrl: 'https://bandithijo.com',
      screenshot: 'https://cdn.staticaly.com/screenshot/bandithijo.com?w=500&h=300',
      profilepic: 'https://cdn.statically.io/img/d33wubrfki0l68.cloudfront.net/4cb146f6f279bfb3a7cabc463aa27b5817845380/73aa2/assets/img/logo/logo_author.png',
      description: 'BanditHijo adalah nama pena dari Rizqi Nur Assyaufi; seorang blogger, vlogger, dan coder yang berasal dari kota Balikpapan...',
      siteEngine: 'Jekyll'
    },
    {
      name: 'Ypraw Blog',
      siteUrl: 'https://ypraw.github.io',
      screenshot: 'https://cdn.staticaly.com/screenshot/ypraw.github.io?w=500&h=300',
      profilepic: 'https://cdn.statically.io/img/d33wubrfki0l68.cloudfront.net/5b4e81bf1811f1b1f52b3e364269a0ef6b00e55b/01606/static/avatar-492ed88ed27cba96afe4309daf844026.jpg',
      description: 'My name is Yunindyo Prabowo. Born in Jakarta 15th June 1995.',
      siteEngine: 'Gatsbyjs'
    },
    {
      name: 'Maidgirl21',
      siteUrl: 'https://maidgirl21.github.io',
      screenshot: 'https://cdn.staticaly.com/screenshot/maidgirl21.github.io?w=500&h=300',
      profilepic: 'https://cdn.statically.io/img/assets.gitlab-static.net/uploads/-/system/user/avatar/3800305/avatar.png',
      description: 'Hello, I am Yoghaswara "Yodel" Hadi Nugroho a.c.e maidgirl21, I am a Rubyist, Unix-Like Enthusiats and Rails Backend Developer...',
      siteEngine: ' '
    },
    {
      name: 'Michael IMO',
      siteUrl: 'https://www.digimoclub.com',
      screenshot: 'https://cdn.staticaly.com/screenshot/www.digimoclub.com?w=500&h=300',
      profilepic: 'https://cdn.statically.io/img/www.digimoclub.com/medias/avatar.jpg',
      description: 'Blog sederhana yang membahas tips, trick dan tutorial yang bermanfaat seputar dunia online',
      siteEngine: 'Hexo'
    },
    {
      name: "Addy's Blog",
      siteUrl: 'https://addy-dclxvi.github.io/',
      screenshot: 'https://cdn.staticaly.com/screenshot/addy-dclxvi.github.io?w=500&h=300',
      profilepic: 'https://cdn.statically.io/img/addy-dclxvi.github.io/image/me.png',
      description: 'Hi! I’m Addy! Just a student, a worker, and a Linux Enthusiast. I love metal, cat, linux, playing guitar, design, customizing desktop, more metal, reading, climbing mountain, fishing, watching movie, anime, and even more metal...',
      siteEngine: 'Hugo'
    }
  ]
}
