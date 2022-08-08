export default class LocalFileReader {
  async getText(path) {
    const content = await fetch(path)
    return content.text()
  }

  async getJson(path) {
    const content = await fetch(path)
    return content.json()
  }

  async mapObject(path, mapper) {
    return mapper.map(await this.getJson(path))
  }
}