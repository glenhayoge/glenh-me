import blogs from '../data/blogs.json'

export function getBlogsByTag(tag) {
  return blogs.filter(blog => blog.tags.includes(tag));
}