export default class RouteManager {

  static getVersion() {
    let version = localStorage.getItem("website_version")
    if (!version) {
      version = "v2"
      localStorage.setItem("website_version", version)
    }

    return version;
  }

  static toBase() {
    return this.toRoute("")
  }

  static toArticle(articleSlug) {
    return this.toRoute(`articles/${articleSlug}`)
  }


  static toGame(gameSlug) {
    return this.toRoute(`games/${gameSlug}`)
  }

  static toRoute(route) {
    let version = this.getVersion()
    return `/${version}/${route}`
  }
}