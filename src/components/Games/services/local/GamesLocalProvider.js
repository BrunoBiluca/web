import IGamesProvider from "../IGamesProvider";
import {create} from "./GamesContentRepo";
import LocalGameMapper from "./LocalGameMapper";

export default class GamesLocalProvider extends IGamesProvider {

  constructor() {
    super()
    this.repo = create()
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
    const configFilePath = this.repo.configPath(game);
    const file = await fetch(configFilePath);
    const config = await file.json();
    const mappedGame = this.mapper.map(config);

    const content = await fetch(this.repo.contentPath(game));

    mappedGame.contentSummary = await content.text();
    return mappedGame;
  }

  getById = async (id) => { }

  getBySlug = async (slug) => { }
}