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
      icon: 'twitter'
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
  menuItemsStart: [
    // href should be match with file name in src/pages
    { name: 'Gallery', href: '/gallery', icon: 'image' },
    { name: 'Blog', href: '/blog', icon: 'book' },
    { name: 'About', href: '/about', icon: 'user' }
  ],
  menuItemsEnd: [
    // icon using feathericons https://feathericons.com/
    {
      name: 'Github',
      href: 'https://gitlab.com/mustofa-id',
      icon: 'github'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/mustoofa.id/',
      icon: 'instagram'
    },
    {
      name: 'Rss',
      href: 'https://mustofa.id/atom.xml',
      icon: 'rss'
    },
    {
      name: 'Contact',
      href: 'mailto:habib@mustofa.id',
      icon: 'mail'
    }
  ],
  friends: [
    {
      name: 'Goku',
      siteUrl: 'https://link.mustofa.id/fb',
      avatar: 'http://media.japanpowered.com/images/goku.png',
      backdrop: '',
      description: 'Son Goku, born Kakarot, is a male Saiyan and the main protagonist of the Dragon Ball metaseries created by Akira Toriyama.',
      siteEngine: 'Bardock'
    },
    {
      name: 'Vegeta',
      siteUrl: 'https://link.mustofa.id/fb',
      avatar: 'https://media.comicbook.com/2018/03/vegeta3-1092181-1280x0.jpeg',
      backdrop: '',
      description: 'Vegeta is the prince of the fallen Saiyan race. He is the eldest son of King Vegeta, the older brother of Tarble, the husband of Bulma, the father of Trunks and Bulla, and the ancestor of Vegeta Jr.',
      siteEngine: 'King Vegeta'
    },
    {
      name: 'Majin Buu',
      siteUrl: 'https://link.mustofa.id/fb',
      avatar: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/majin-buu-dragonball-z.jpg',
      backdrop: '',
      description: 'Majin Buu, generally spelled Majin Boo in subtitles of the Japanese anime, and rendered as Djinn-Boo in the Viz Media manga, is a fictional character and the final antagonist in the Dragon Ball manga series created by Akira Toriyama.',
      siteEngine: 'Booby'
    },
    {
      name: 'Frieza',
      siteUrl: 'https://link.mustofa.id/fb',
      avatar: 'http://pre01.deviantart.net/4496/th/pre/f/2017/207/6/8/frieza_in_the_tournament_by_zika_arts-dbhtr6c.png',
      backdrop: '',
      description: 'Frieza was the emperor of the universe, who controlled his own imperial army and was feared for his ruthlessness and power, but was taken out of power when he was killed by Future Trunks & Goku.',
      siteEngine: 'Cooler'
    },
    {
      name: 'Gohan',
      siteUrl: 'https://link.mustofa.id/fb',
      avatar: 'https://am21.akamaized.net/tms/cnt/uploads/2018/09/GohanSS2.jpg',
      backdrop: '',
      description: 'Gohan is the elder son of the series primary protagonist Goku and his wife Chi-Chi, the older brother of Goten, the husband of Videl and father to Pan. Gohan is the first hybrid (half-Earthling, half-Saiyan) to appear in the series. He is named after Goku\'s adoptive grandfather, Gohan.',
      siteEngine: 'Videl'
    },
    {
      name: 'Mr. Satan',
      siteUrl: 'https://link.mustofa.id/fb',
      avatar: 'https://i.ytimg.com/vi/YMEyz3-zSI0/maxresdefault.jpg',
      backdrop: '',
      description: 'Mr. Satan, also known as Hercule Satan in the Funimation dub, is the World Martial Arts Champion and the Earth\'s protector. His real name is Mark.',
      siteEngine: 'Miguel'
    }
  ]
}
