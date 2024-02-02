import LocalFileReader from "services/LocalFileReader"

export default class Contents {
  isLoaded

  constructor(contentPath) {
    this.contentPath = contentPath
    this.contents = []
  }

  async load() {
    this.contents = await new LocalFileReader().getJson(this.contentPath.registry())
    this.isLoaded = true
  }

  all(start, limit) {
    return this.contents.slice(start, limit)
  }
}