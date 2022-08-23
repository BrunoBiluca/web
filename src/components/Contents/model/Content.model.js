class Content {
  title
  contentSummary
  thumbnail
  link
  publishedAt
  categories = []
  backgroundColor

  constructor(title, contentSummary) {
    this.title = title
    this.contentSummary = contentSummary
  }
}
export default Content;