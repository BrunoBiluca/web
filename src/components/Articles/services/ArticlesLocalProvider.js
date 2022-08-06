import IArticlesProvider from "./IArticlesProvider";

export default class ArticlesLocalProvider extends IArticlesProvider {
  get = async (start = null, limit = null) => {
    return Promise.resolve(() => []);
  }
}