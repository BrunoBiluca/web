import { isNullOrEmpty } from "helpers/StringExtensions"

export default class GitHubRepositoryModel {
  constructor(name, owner, url) {
    if (isNullOrEmpty(name, owner, url)) {
      throw new Error("Repository is invalid")
    }

    this.repositoryName = name
    this.owner = owner
    this.url = url
  }
}