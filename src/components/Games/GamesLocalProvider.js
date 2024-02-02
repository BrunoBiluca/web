import LocalContentPath from "components/Contents/LocalContentPath";
import LocalFileReader from "services/LocalFileReader";
import IGamesProvider from "./IGamesProvider";
import LocalGameMapper from "./LocalGameMapper";
import Contents from "components/Contents/Contents.service";

export default class GamesLocalProvider extends IGamesProvider {

  constructor() {
    super()
    this.contentPath = new LocalContentPath("game")
    this.fileReader = new LocalFileReader()
    this.contents = new Contents(this.contentPath)
    this.mapper = new LocalGameMapper(this.contentPath)
  }

  get = async (start = 0, limit = 3, orderByDate = false) => {
    if (!this.contents.isLoaded)
      await this.contents.load()

    const games = []
    const filteredGames = this.contents.all(start, limit)
    for (const game of filteredGames) {
      games.push(await this.getGameContent(game.slug));
    }

    if (orderByDate)
      return games.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))

    return games
  }

  getAll = async () => {
    const games = []
    for (const game of this.contents.all()) {
      games.push(await this.getGameContent(game.slug));
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