import Game from "components/Games/model/Game.model"
import Image from "components/Image/Image.model"

export default class LocalGameMapper {

  constructor(repo) {
    this.repo = repo
  }

  map(game) {
    try {
      return this.onMap(game)
    } catch (error) {
      console.log("Error mapping: " + game.key)
      throw error
    }
  }

  onMap(game) {
    const mappedGame = new Game(game)

    mappedGame.gameStatus = game.game_status
    mappedGame.gamePlayLink = game.online_play_link
    mappedGame.gameplayDuration = game.gameplay_duration
    mappedGame.itchioLink = game.itchio_link
    mappedGame.publishedAt = game.published_at
    mappedGame.packageSize = game.package_size

    mappedGame.featuredImage = this.mapImage(game, game.featured_image)

    mappedGame.gallery = game.gallery.map(g => this.mapImage(game, g));
    game.categories.forEach(c => mappedGame.addCategory(c));

    return mappedGame
  }

  mapImage(game, imageObj) {
    const path = imageObj.path
      ? this.formatImagePath(game, imageObj.path)
      : this.formatImagePath(game, imageObj.thumbnail)
    return new Image({
      key: imageObj.key,
      alt: imageObj.alt,
      path: path,
      thumbnail: this.formatImagePath(game, imageObj.thumbnail),
      name: imageObj.name
    })
  }

  formatImagePath(game, image) {
    return `${this.repo.folderPath(game.key)}/${image}`
  }
}