import IGamesProvider from "./IGamesProvider";

export default class GamesLocalProvider extends IGamesProvider {
  get = async (start = null, limit = null) => {
    return Promise.resolve(() => {
      return []
    })
  }

  getById = async (id) => { }

  getBySlug = async (slug) => { }
}