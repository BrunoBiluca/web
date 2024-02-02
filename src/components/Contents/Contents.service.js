import LocalFileReader from "services/LocalFileReader"

export default class Contents {
  constructor(contentPath) {
    this.contentPath = contentPath
    this.contents = []
  }

  async load() {
    this.contents = await new LocalFileReader().getJson(this.contentPath.registry())
  }
}