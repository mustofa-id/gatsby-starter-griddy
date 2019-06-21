export function edgesToCategories (edges) {
  return edges
    .map(e => e.node.frontmatter.category)
    .filter((v, i, e) => e.indexOf(v) === i)
}

export function edgesToTags (edges) {
  return edges
    .map(e => e.node.frontmatter.tags)
    .filter((v, i, e) => e.indexOf(v) === i)
}

export function isExternalLink (url) {
  return url.includes('http') || url.includes('mailto')
}
