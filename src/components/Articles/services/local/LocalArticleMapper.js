import Article from "components/Articles/model/Article.model";
import Image from "components/Image/Image.model";
import { getCategory } from "config/Categories";

export default class LocalArticleMapper {
  constructor(repo) {
    this.repo = repo
  }

  map(article) {
    try {
      return this.onMap(article)
    } catch (error) {
      console.error("Error mapping: " + article.key)
      throw error
    }
  }

  onMap(article) {
    const mappedArticle = new Article(article)

    mappedArticle.publishedAt = article.published_at
    mappedArticle.featuredImage = this.mapImage(article, article.featured_image)
    mappedArticle.contentSummary = article.description
    mappedArticle.imageBasePath = this.repo.folderPath(article.key)

    article.categories
      .forEach(c => mappedArticle.addCategory(getCategory(c)));

    return mappedArticle
  }

  mapImage(article, imageObj) {
    return new Image(
      {
        path: imageObj.path ? imageObj.path : imageObj.thumbnail,
        thumbnail: imageObj.thumbnail,
        name: imageObj.name
      },
      this.repo.folderPath(article.key)
    )
  }
}