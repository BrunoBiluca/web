import RegisteredGames from "config/RegisteredGames";
import LocaleService from "services/LocaleService";

export function create() {
  return new GamesContentRepo(RegisteredGames);
}

export default class GamesContentRepo {
  folder = "content/games";
  config_file = "game.json";

  constructor(registeredGames) {
    this.registeredGames = registeredGames;
  }

  getAll() {
    return [...this.registeredGames]
  }

  folderPath(game) {
    return `${this.folder}/${game}`
  }

  configPath(game) {
    return `${this.folder}/${game}/${this.config_file}`
  }

  contentPath(game) {
    this.locale = LocaleService.getLocale();
    return `${this.folder}/${game}/game.content.${this.locale}.md`
  }
}