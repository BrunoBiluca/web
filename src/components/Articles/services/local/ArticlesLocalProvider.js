import LocalContentPath from "components/Contents/LocalContentPath";
import LocalFileReader from "services/LocalFileReader";
import IArticlesProvider from "../IArticlesProvider";
import LocalArticleMapper from "./LocalArticleMapper";
import Contents from "components/Contents/Contents.service";

export default class ArticlesLocalProvider extends IArticlesProvider {
  constructor() {
    super()
    this.fileReader = new LocalFileReader()
    this.contentPath = new LocalContentPath("article")
    this.contents = new Contents(this.contentPath)
    this.mapper = new LocalArticleMapper(this.contentPath)
  }

  get = async (start = 0, limit = 3, orderByDate = false) => {
    if (!this.contents.isLoaded)
      await this.contents.load()

    const articles = []

    const filtered = this.contents.all(start, limit)
    for (const article of filtered) {
      articles.push(await this.getBySlug(article.slug));
    }

    if (orderByDate)
      return articles.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))

    return articles
  }

  getAll = async () => {
    const articles = []
    for (const article of this.contents.all()) {
      articles.push(await this.getBySlug(article));
    }
    return articles
  }

  getBySlug = async (slug) => {
    const configPath = this.contentPath.configPath(slug);
    try {
      const article = await this.fileReader.mapObject(configPath, this.mapper)
      article.content = await this.fileReader.getText(this.contentPath.contentPath(slug))
      return article
    } catch (error) {
      console.error(`Error loading: <${slug}> content on path: ${configPath}`)
      throw error
    }
  }
}