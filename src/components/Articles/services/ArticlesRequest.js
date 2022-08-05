import axios from 'axios';
import ArticleMapper from './ArticleMapper';
import { backendPath } from 'config/server';
import LocaleService from 'services/LocaleService';
import UrlHelper from 'helpers/UrlHelper';

class ArticlesRequest {
  debug = false;

  constructor(debug = false) {
    this.debug = debug;
  }

  get = async (start = null, limit = null) => {
    let url = `${backendPath}/articles`;

    url = UrlHelper.addQueryString(url, "_start", start);
    url = UrlHelper.addQueryString(url, "_limit", limit);
    url = UrlHelper.addQueryString(url, "_locale", LocaleService.getLocale());

    const response = await axios.get(url);
    if (this.debug) console.log(response);

    let responseArticles = [];
    response.data.forEach(element => {
      responseArticles.push(new ArticleMapper().map(element));
    });
    return responseArticles;
  }

  getById = async (id) => {
    let url = `${backendPath}/articles/${id}`;
    const response = await axios.get(url);
    if (this.debug) console.log(response);

    return new ArticleMapper().map(response.data);
  }

  getBySlug = async (slug) => {
    let url = `${backendPath}/articles?_slug=${slug}`;

    url = UrlHelper.addQueryString(url, "_locale", LocaleService.getLocale());

    const response = await axios.get(url);
    if (this.debug) console.log(response);

    if (response.data.length === 0)
      return {};

    return new ArticleMapper().map(response.data[0]);
  }

}

export default ArticlesRequest;