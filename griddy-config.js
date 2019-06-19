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

exports.siteMetadata = {
  title: `Griddy`,
  description: `Gallery & Portfolio of artist`,
  author: `@mustofaa_id`,
  primaryColor: `#363636`,
  menuItemsStart,
  menuItemsEnd
}
