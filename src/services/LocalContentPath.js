import { baseUrl } from "config/server";
import LocaleService from "./LocaleService";

export default class LocalContentPath {
  constructor(contentName) {
    this.basePath = baseUrl ?? ""
    this.contentName = contentName
    this.folder = `content/${contentName}s`;
    this.configFile = `${contentName}.json`;
  }

  getFolder() {
    return `${this.basePath}/${this.folder}`
  }

  folderPath(content) {
    return `${this.getFolder()}/${content}`
  }

  configPath(content) {
    return `${this.folderPath(content)}/${this.configFile}`
  }

  contentPath(content) {
    this.locale = LocaleService.getLocale();
    return `${this.folderPath(content)}/${this.contentName}.content.${this.locale}.md`
  }
}