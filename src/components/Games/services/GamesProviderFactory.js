import GamesLocalProvider from "./local/GamesLocalProvider";

export default class GamesProviderFactory {
  static local(){
    return new GamesLocalProvider();
  }
}