import { baseUrl } from "config/server";
import LocaleService from "../../services/LocaleService";

export default class LocalContentPath {
  constructor(contentType) {
    this.basePath = baseUrl ?? ""
    this.contentType = contentType
    this.folder = `content/${contentType}s`;
    this.configFile = `${contentType}.json`;
  }

  #getFolder() {
    return `${this.basePath}/${this.folder}`
  }

  registry() {
    return `${this.#getFolder()}/registry.json`
  }

  folderPath(contentName) {
    return `${this.#getFolder()}/${contentName}`
  }

  configPath(contentName) {
    return `${this.folderPath(contentName)}/${this.configFile}`
  }

  contentPath(contentName) {
    this.locale = LocaleService.getLocale();
    return `${this.folderPath(contentName)}/${this.contentType}.content.${this.locale}.md`
  }
}