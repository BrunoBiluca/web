import IGamesProvider from "../IGamesProvider";
import GamesContent from "./GamesContent";
import LocalGameMapper from "./LocalGameMapper";

export default class GamesLocalProvider extends IGamesProvider {
  get = async (start = null, limit = null) => {
    const gameConfigPath = GamesContent[0];
    const gameFolder = gameConfigPath.replace("/game.json", "")

    const file = await fetch(gameConfigPath)
    const game = await file.json();
    const mappedGame = new LocalGameMapper().map(game)

    // TODO: alterar as línguas de conteúdo
    const gameContentFile = await fetch(gameFolder + "/game.content.ptbr.md")
    mappedGame.contentSummary = await gameContentFile.text()

    return [mappedGame]
  }

  getById = async (id) => { }

  getBySlug = async (slug) => { }
}