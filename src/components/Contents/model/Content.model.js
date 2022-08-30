class Content {
  title
  contentSummary
  thumbnail
  link
  publishedAt
  categories = []
  backgroundColor
  shadowColor
  hoverColor

  constructor(title, contentSummary) {
    this.title = title
    this.contentSummary = contentSummary
  }
}
export default Content;