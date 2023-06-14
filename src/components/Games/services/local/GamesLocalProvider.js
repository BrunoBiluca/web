import RegisteredGames from "config/RegisteredGames";
import LocalContentPath from "services/LocalContentPath";
import LocalFileReader from "services/LocalFileReader";
import IGamesProvider from "../IGamesProvider";
import LocalGameMapper from "./LocalGameMapper";

export default class GamesLocalProvider extends IGamesProvider {

  constructor() {
    super()
    this.contentPath = new LocalContentPath("game")
    this.fileReader = new LocalFileReader()
    this.mapper = new LocalGameMapper(this.contentPath)
  }

  get = async (start = 0, limit = 3, orderByDate = false) => {
    const games = []
    const filteredGames = RegisteredGames.slice(start, limit)
    for (const game of filteredGames) {
      games.push(await this.getGameContent(game));
    }

    if(orderByDate)
      return games.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))

    return games
  }

  getAll = async () => {
    const games = []
    for (const game of RegisteredGames) {
      games.push(await this.getGameContent(game));
    }
    return games
  }

  getById = async (id) => { }

  getBySlug = async (slug) => {
    return this.getGameContent(slug)
  }

  async getGameContent(game) {
    const configPath = this.contentPath.configPath(game);
    const mappedGame = await this.fileReader.mapObject(configPath, this.mapper);

    mappedGame.contentSummary = await this.fileReader.getText(this.contentPath.contentPath(game))

    return mappedGame;
  }
}