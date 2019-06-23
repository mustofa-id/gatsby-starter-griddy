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

export function updatedObj (old, upd) {
  return { ...old, ...upd }
}

export function hashCode (str) {
  var hash = 0
  if (str.length === 0) return hash
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32bit integer
  }
  return hash
}
