import axios from 'axios';
import { backendPath } from '../config/server';

class NewsLetterRequest {
  debug = false;

  post = (entity) => {
    return axios.post(backendPath + "newsletters", entity);
  }

}

export default NewsLetterRequest;