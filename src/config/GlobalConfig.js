import { env } from 'process'
import ArticlesProviderFactory from "components/Articles/services/ArticlesProviderFactory";
import GamesProviderFactory from "components/Games/services/GamesProviderFactory";
import ContentColor from "../components/Contents/model/ContentColor.model";

const GlobalConfig = {
  articles: {
    provider() { return ArticlesProviderFactory.local() },
    color() { return new ContentColor("beige", "#dddd99", "#c6c61e") }
  },
  games: {
    provider() { return GamesProviderFactory.local() },
    color() { return new ContentColor("azure", "#69dada", "#1cadad") }
  },
  newsletter: {
    enable: false
  },
  github: {
    token() { return env.REACT_APP_GITHUB_PERSONAL_TOKEN }
  }
}

export default GlobalConfig;