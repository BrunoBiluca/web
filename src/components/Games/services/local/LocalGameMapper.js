import Game from "components/Games/model/Game.model"

export default class LocalGameMapper {

  constructor(repo) {
    this.repo = repo
  }

  map(game) {
    const mappedGame = new Game(game)

    const thumbnail = game.featured_image.thumbnail
    mappedGame.featuredImage
      .thumbnail = `${this.repo.folderPath(game.key)}/${thumbnail}`

    game.categories.forEach(c => mappedGame.addCategory(c));

    return mappedGame
  }
}