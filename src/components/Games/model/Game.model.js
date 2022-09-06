import GitHubRepositoryModel from "components/GitHubRepository/GitHubRepository.model"
import { getCategory } from "config/Categories"

export default class Game {
  key
  slug
  title
  link
  publishedAt
  author
  description
  contentSummary
  gameplayDuration
  gameStatus // TODO: definir os tipos
  gamePlayLink
  itchioLink
  featuredImage = {
    path: "",
    thumbnail: "",
    description: ""
  }
  categories = []
  gallery = []
  howToPlay = []

  repository = undefined

  constructor(game) {
    this.init(game)
  }

  init(game) {
    this.key = game.key
    this.slug = game.slug
    this.title = game.title
    this.publishedAt = game.publishedAt
    this.author = game.author
    this.description = game.description
    this.contentSummary = game.contentSummary
    this.gameplayDuration = game.gameplayDuration
    this.gameStatus = game.gameStatus
    this.gamePlayLink = game.gamePlayLink
    this.itchioLink = game.itchioLink

    try {
      this.repository = new GitHubRepositoryModel(
        game.repository.name, game.repository.owner, game.repository.url
      )
    } catch (error) {
      // invalid repository
      this.repository = undefined
    }

    this.link = `/games/${game.slug}`
  }

  addCategory(key) {
    this.categories.push(getCategory(key))
  }
}
