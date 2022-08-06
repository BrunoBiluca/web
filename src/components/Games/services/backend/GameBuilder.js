export default class GameBuilder {
  empty() {
    return {
      author: "",
      categories: [],
      content: "",
      featuredImage: {
        path: "",
        description: "description placeholder"
      },
      publishedAt: "",
      title: "",
      gallery: [],
      gamePackage: {},
      howToPlay: []
    }
  }
}