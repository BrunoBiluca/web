import ArticlesProviderFactory from "components/Articles/services/ArticlesProviderFactory";
import GamesProviderFactory from "components/Games/services/GamesProviderFactory";

const FeaturesConfig = {
  articles: {
    provider() { return ArticlesProviderFactory.local() }
  },
  games: {
    provider() { return GamesProviderFactory.local() }
  },
  newsletter: {
    enable: false
  }
}

export default FeaturesConfig;