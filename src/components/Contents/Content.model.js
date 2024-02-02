import ContentColor from "components/Contents/ContentColor.model"

class Content {
  title
  contentSummary
  thumbnail
  link
  publishedAt
  categories = []
  contentColor = new ContentColor()

  constructor(title, contentSummary) {
    this.title = title
    this.contentSummary = contentSummary
  }
}
export default Content;