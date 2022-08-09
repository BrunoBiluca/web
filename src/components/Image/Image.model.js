export default class Image {

  name
  path
  thumbnail
  alt

  constructor(config, folderPath = "") {
    this.name = config.name

    if (folderPath) {
      this.path = `${folderPath}/${config.path}`
      this.thumbnail = `${folderPath}/${config.thumbnail}`
    }
    else {
      this.path = config.path
      this.thumbnail = config.thumbnail
    }
    this.alt = config.alt
  }
}