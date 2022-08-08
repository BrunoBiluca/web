import Article from "components/Articles/model/Article.model";
import { getCategory } from "config/Categories";

export default class LocalArticleMapper {
  constructor(repo) {
    this.repo = repo
  }

  map(article) {
    try {
      return this.onMap(article)
    } catch (error) {
      console.log("Error mapping: " + article.key)
      throw error
    }

  }

  onMap(article) {
    const mappedArticle = new Article(article)

    const thumbnail = article.featured_image.thumbnail
    mappedArticle.featuredImage
      .thumbnail = `${this.repo.folderPath(article.key)}/${thumbnail}`

    mappedArticle.contentSummary = article.description

    article.categories
      .forEach(c => mappedArticle.addCategory(getCategory(c)));

    return mappedArticle
  }

}