const menuItemsStart = [
  // href should be match with file name in src/pages
  { name: 'Gallery', href: '/gallery', icon: 'image' },
  { name: 'Blog', href: '/blog', icon: 'book' },
  { name: 'About', href: '/about', icon: 'user' }
]

const menuItemsEnd = [
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
]

const socialLink = [
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
]

exports.siteMetadata = {
  title: `Griddy`,
  description: `Gallery & Portfolio of artist`,
  author: `@mustofaa_id`,
  url: `https://griddy.netlify.com/`, // For SEO
  primaryColor: `#ffffff`,
  menuItemsStart,
  menuItemsEnd,
  socialLink
}
