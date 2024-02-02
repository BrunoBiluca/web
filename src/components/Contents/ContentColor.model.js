export default class ContentColor {
  constructor(bgColor, shadowColor, hoverColor) {
    this.bgColor = bgColor
    this.shadowColor = shadowColor
    this.hoverColor = hoverColor
  }

  getStyle() {
    return {
      "--bg-color": this.bgColor,
      "--shadow-color": this.shadowColor,
      "--hover-color": this.hoverColor
    }
  }
}