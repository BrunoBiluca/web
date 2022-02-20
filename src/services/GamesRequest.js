import axios from "axios";
import GameMapper from "./GameMapper";
import { backendPath } from '../config/server';
import UrlHelper from "../helpers/UrlHelper";
import LocaleService from "./LocaleService";
import placeHolder from '../images/placeholder.png';

class GamesRequest {
  debug = process.env.NODE_ENV === 'production' ? false : true;

  static emptyGame = {
    author: "",
    categories: [],
    content: "",
    featuredImage: {
      path: placeHolder,
      description: "description placeholder"
    },
    publishedAt: "",
    title: "",
    gallery: [],
    gamePackage: {},
    howToPlay: []
  }

  get = async (start = null, limit = null) => {
    let url = `${backendPath}/games`;

    url = UrlHelper.addQueryString(url, "_start", start);
    url = UrlHelper.addQueryString(url, "_limit", limit);
    url = UrlHelper.addQueryString(url, "_locale", LocaleService.getLocale());

    var response = await axios.get(url);

    if (this.debug) console.log(response);

    var responseArticles = [];
    response.data.forEach(element => {
      responseArticles.push(new GameMapper().map(element));
    });
    return responseArticles;
  }

  getById = async (id) => {
    var response = await axios.get(`${backendPath}/games/${id}`)

    if (this.debug) console.log(response);

    return new GameMapper().map(response.data);
  }

  getBySlug = async (slug) => {
    let url = `${backendPath}/games?_slug=${slug}`;

    url = UrlHelper.addQueryString(url, "_locale", LocaleService.getLocale());

    const response = await axios.get(url);
    if (this.debug) console.log(response);

    if (response.data.length === 0)
      return GamesRequest.emptyGame;

    return new GameMapper().map(response.data[0]);
  }
}

export default GamesRequest;