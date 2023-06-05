import { useEffect, useState } from "react";

import Section from "../Components/Section/Section";
import AboutMe from "./AboutMe";
import GameCard from "../Games/GameCard";
import ArticleCard from "../Articles/ArticleCard";
import style from './Home.module.css';
import GlobalConfig from "config/GlobalConfig";
import Profile from "./Profile";
import ActionButton from "AppV2/Components/Buttons/ActionButton";

async function loadGamesAsync(page) {
  const pageSize = 3;
  const start = page * pageSize;
  return await GlobalConfig.games.provider().get(start, start + pageSize, true)
}

async function loadArticles() {
  return await GlobalConfig.articles.provider().get();
}

export default function Home() {
  const [isGamesFilled, setIsGamesFilled] = useState(false);
  const [gamesPage, setGamesPage] = useState(0)
  const [games, setGames] = useState([])

  const [articles, setArticles] = useState([])

  function loadGames() {
    loadGamesAsync(gamesPage)
      .then(res => {
        if (res.length === 0) {
          setIsGamesFilled(true);
          return;
        }

        setGames(g => [...g, ...res]);
        setGamesPage(g => g + 1)
      });
  }

  useEffect(() => {
    loadGames();

    loadArticles()
      .then(res => {
        setArticles(res)
      });
  }, [])

  return (
    <>
      <Profile />
      <div>
        <Section title="Sobre mim">
          <AboutMe />
        </Section>

        <Section title="Jogos">
          <div className={style.grid}>
            {games.map(g => <GameCard key={g.key} game={g} />)}
          </div>
          <div style={{ textAlign: "center", padding: "2em 0" }}>
            <ActionButton
              hide={isGamesFilled}
              label="Carregar mais"
              onClick={loadGames}
            />
          </div>
        </Section>

        <Section title="Artigos">
          <div className={style.grid}>
            {articles.map(a => <ArticleCard key={a.key} article={a} />)}
          </div>
        </Section>
      </div>
    </>
  )
}