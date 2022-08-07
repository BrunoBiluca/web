import RegisteredGames from "config/RegisteredGames";

export function create() {
  return new GamesContentRepo(RegisteredGames);
}

export default class GamesContentRepo {
  folder = "content/games";
  config_file = "game.json";
  locale = "pt-BR"

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
    return `${this.folder}/${game}/game.content.${this.locale}.md`
  }
}