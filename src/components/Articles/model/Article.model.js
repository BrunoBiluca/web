export default class Article {
  key
  slug
  title
  publishedAt
  author
  contentSummary
  featuredImage = {}
  categories = []

  constructor(article) {
    this.key = article.key
    this.slug = article.slug
    this.title = article.title
    this.publishedAt = article.publishedAt
    this.author = article.author
    this.contentSummary = article.contentSummary ?? ""
  }

  addCategory(category) {
    this.categories.push(category)
  }
}