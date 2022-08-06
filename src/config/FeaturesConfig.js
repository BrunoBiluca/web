import GamesProviderFactory from "components/Games/services/GamesProviderFactory";

const FeaturesConfig = {
  newsletter: {
    enable: false
  },
  games: {
    provider() { return GamesProviderFactory.local() }
  }
}

export default FeaturesConfig;