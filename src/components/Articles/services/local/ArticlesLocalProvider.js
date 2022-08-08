import LocalFileReader from "services/LocalFileReader";
import IArticlesProvider from "../IArticlesProvider";
import { create } from "./ArticlesContentRepo";
import LocalArticleMapper from "./LocalArticleMapper";

export default class ArticlesLocalProvider extends IArticlesProvider {
  constructor() {
    super()
    this.repo = create()
    this.fileReader = new LocalFileReader()
    this.mapper = new LocalArticleMapper(this.repo)
  }

  get = async (start = null, limit = null) => {
    const articles = []
    for (const article of this.repo.getAll()) {
      articles.push(await this.getArticle(article));
    }
    return articles
  }

  getArticle = async (slug) => {
    const article = await this.fileReader
      .mapObject(this.repo.configPath(slug), this.mapper)

    return article
  }
}