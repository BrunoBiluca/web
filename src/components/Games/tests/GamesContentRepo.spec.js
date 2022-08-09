import GamesContentRepo from "../services/local/GamesContentRepo"

describe("GamesContentRepo.js", () => {
  it("should return empty game list when has no game registered", () => {
    const repo = new GamesContentRepo([])
    expect(repo.getAll()).toHaveLength(0)
  })

  it("should return all games registered", () => {
    const repo = new GamesContentRepo(["game_01", "game_02"])
    expect(repo.getAll()).toHaveLength(2)
  })

  it("given game is registered should format paths", () => {
    const repo = new GamesContentRepo(["game_01", "game_02"])

    const games = repo.getAll()
    expect(games).toHaveLength(2)

    expect(repo.folderPath(games[0]))
      .toBe("/content/games/game_01")
    expect(repo.configPath(games[0]))
      .toBe("/content/games/game_01/game.json")
  })

})