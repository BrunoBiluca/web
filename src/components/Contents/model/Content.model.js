class Content {
  title
  contentSummary
  thumbnail
  link
  publishedAt
  categories = []

  constructor(title, contentSummary) {
    this.title = title
    this.contentSummary = contentSummary
  }
}
export default Content;