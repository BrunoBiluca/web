class WindowResizeHandler {
  onUpdate

  subscribe() {
    window.addEventListener("resize", this.updateMedia)
  }

  unsubscribe() {
    window.removeEventListener("resize", this.updateMedia)
  }

  updateMedia() {
    this.onUpdate({ isDesktop: window.innerWidth > 1400 });
  }
}

export default WindowResizeHandler;