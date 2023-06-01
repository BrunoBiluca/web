export default class RouteManager {
  static toBase() {
    let version = "v1";
    return `/${version}`
  }

  static toArticle(articleSlug) {
    let version = "v1";
    return `/${version}/articles/${articleSlug}`
  }


  static toGame(gameSlug) {
    let version = "v1";
    return `/${version}/games/${gameSlug}`
  }
}