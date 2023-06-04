import ArticlesLocalProvider from "./local/ArticlesLocalProvider";

export default class ArticlesProviderFactory {
  static local(){
    return new ArticlesLocalProvider();
  }
}