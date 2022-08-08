import LocalFileReader from "services/LocalFileReader";
import IGamesProvider from "../IGamesProvider";
import {create} from "./GamesContentRepo";
import LocalGameMapper from "./LocalGameMapper";

export default class GamesLocalProvider extends IGamesProvider {

  constructor() {
    super()
    this.repo = create()
    this.fileReader = new LocalFileReader()
    this.mapper = new LocalGameMapper(this.repo)
  }

  get = async (start = null, limit = null) => {
    const games = []
    for (const game of this.repo.getAll()) {
      games.push(await this.getGameContent(game));
    }
    return games
  }

  async getGameContent(game) {
    const configPath = this.repo.configPath(game);
    const mappedGame = await this.fileReader.mapObject(configPath, this.mapper);

    mappedGame.contentSummary = await this.fileReader.getText(this.repo.contentPath(game))
    return mappedGame;
  }

  getById = async (id) => { }

  getBySlug = async (slug) => { }
}