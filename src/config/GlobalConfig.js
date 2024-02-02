import ArticlesProviderFactory from "components/Articles/services/ArticlesProviderFactory";
import GamesProviderFactory from "components/Games/services/GamesProviderFactory";
import ContentColor from "../components/Contents/ContentColor.model";

const GlobalConfig = {
  articles: {
    provider() { return ArticlesProviderFactory.local() },
    color() { return new ContentColor("beige", "#dddd99", "#c6c61e") }
  },
  games: {
    provider() { return GamesProviderFactory.local() },
    color() { return new ContentColor("azure", "#69dada", "#1cadad") }
  },
  github: {
    token() { return process.env.REACT_APP_GITHUB_PERSONAL_TOKEN }
  }
}

export default GlobalConfig;