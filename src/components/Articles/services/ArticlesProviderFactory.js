import ArticlesLocalProvider from "./ArticlesLocalProvider";
import ArticlesRequests from "./ArticlesRequests";

export default class ArticlesProviderFactory {
  static local(){
    return new ArticlesLocalProvider();
  }

  static online(){
    return new ArticlesRequests();
  }
}