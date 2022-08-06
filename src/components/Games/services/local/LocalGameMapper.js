import Game from "components/Games/model/Game"

export default class LocalGameMapper {
  map(game) {
    const mappedGame = new Game(game)

    mappedGame.featuredImage.thumbnail = game.featured_image.thumbnail

    game.categories
      .forEach(c => mappedGame.addCategory(c.key, c.name, c.color));

    return mappedGame
  }
}