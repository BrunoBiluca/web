import GamesLocalProvider from "./GamesLocalProvider";
import GamesRequests from "./GamesRequests"

export default class GamesProviderFactory {
  static local(){
    return new GamesLocalProvider();
  }

  static online(){
    return new GamesRequests();
  }
}