class Content {
  title
  featuredImage
  thumbnail
  link
  publishedAt
  contentSummary
  categories = []

  constructor(title, contentSummary) {
    this.title = title
    this.contentSummary = contentSummary
  }
}
export default Content;