import RegisteredArticles from "config/RegisteredArticles";
import LocaleService from "services/LocaleService";

export function create() {
  return new ArticlesContentRepo(RegisteredArticles);
}

export default class ArticlesContentRepo {
  folder = "content/articles";
  config_file = "article.json";

  constructor(registeredArticles) {
    this.registeredArticles = registeredArticles;
  }

  getAll() {
    return [...this.registeredArticles]
  }

  folderPath(article) {
    return `${this.folder}/${article}`
  }

  configPath(article) {
    return `${this.folder}/${article}/${this.config_file}`
  }

  contentPath(article) {
    this.locale = LocaleService.getLocale();
    return `${this.folder}/${article}/article.content.${this.locale}.md`
  }
}