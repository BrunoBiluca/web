import { hasMethods } from "helpers/InterfaceValidator"

export default class IGamesProvider {
  constructor() {
    hasMethods(this, "get", "getById", "getBySlug")
  }

  get = async (start = null, limit = null) => { }

  getById = async (id) => { }

  getBySlug = async (slug) => { }
}