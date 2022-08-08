import ArticlesLocalProvider from "./local/ArticlesLocalProvider";
import ArticlesRequests from "./backend/ArticlesRequests";

export default class ArticlesProviderFactory {
  static local(){
    return new ArticlesLocalProvider();
  }

  static online(){
    return new ArticlesRequests();
  }
}