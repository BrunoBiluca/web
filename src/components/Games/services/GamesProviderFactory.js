import GamesLocalProvider from "./local/GamesLocalProvider";
import GamesRequests from "./backend/GamesRequests"

export default class GamesProviderFactory {
  static local(){
    return new GamesLocalProvider();
  }

  static online(){
    return new GamesRequests();
  }
}