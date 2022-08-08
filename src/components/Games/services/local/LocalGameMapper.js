import Game from "components/Games/model/Game.model"

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

    mappedGame.featuredImage = this.mapImage(game, game.featured_image)

    if (!mappedGame.featuredImage.path) {
      mappedGame.featuredImage.path = mappedGame.featuredImage.thumbnail
    }

    mappedGame.gallery = game.gallery.map(g => this.mapImage(game, g));
    game.categories.forEach(c => mappedGame.addCategory(c));

    return mappedGame
  }

  mapImage(game, imageObj) {
    const path = imageObj.path
      ? this.formatImagePath(game, imageObj.path)
      : this.formatImagePath(game, imageObj.thumbnail)
    return {
      path: path,
      thumbnail: this.formatImagePath(game, imageObj.thumbnail),
      name: imageObj.name
    }
  }

  formatImagePath(game, image) {
    return `${this.repo.folderPath(game.key)}/${image}`
  }
}