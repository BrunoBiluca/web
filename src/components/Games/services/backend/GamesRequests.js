import axios from "axios";
import GameRequestMapper from "./GameRequestMapper";
import { backendPath } from 'config/server';
import UrlHelper from "helpers/UrlHelper";
import LocaleService from "services/LocaleService";
import GameBuilder from "./GameBuilder";

class GamesRequests {
  debug = process.env.NODE_ENV === 'production' ? false : true;

  get = async (start = null, limit = null) => {
    let url = `${backendPath}/games`;

    url = UrlHelper.addQueryString(url, "_start", start);
    url = UrlHelper.addQueryString(url, "_limit", limit);
    url = UrlHelper.addQueryString(url, "_locale", LocaleService.getLocale());

    let response = await axios.get(url);

    if (this.debug) console.log(response);

    let responseArticles = [];
    response.data.forEach(element => {
      responseArticles.push(new GameRequestMapper().map(element));
    });
    return responseArticles;
  }

  getById = async (id) => {
    let response = await axios.get(`${backendPath}/games/${id}`)

    if (this.debug) console.log(response);

    return new GameRequestMapper().map(response.data);
  }

  getBySlug = async (slug) => {
    let url = `${backendPath}/games?_slug=${slug}`;

    url = UrlHelper.addQueryString(url, "_locale", LocaleService.getLocale());

    const response = await axios.get(url);
    if (this.debug) console.log(response);

    if (response.data.length === 0)
      return new GameBuilder().empty();

    return new GameRequestMapper().map(response.data[0]);
  }
}

export default GamesRequests;