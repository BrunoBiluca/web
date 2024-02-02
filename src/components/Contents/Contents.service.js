import { isProduction } from "config/server"
import LocalFileReader from "services/LocalFileReader"

const ContentState = {
  draft: "draft",
  public: "public",
  private: "private"
}

export default class Contents {
  isLoaded

  constructor(contentPath) {
    this.contentPath = contentPath
    this.contents = []
  }

  async load() {
    let all = await new LocalFileReader().getJson(this.contentPath.registry())

    if (isProduction) {
      this.contents = all.filter(c => c.state === ContentState.public)
    }
    else {
      this.contents = all
    }

    this.isLoaded = true
  }

  all(start, limit) {
    return this.contents.slice(start, limit)
  }
}