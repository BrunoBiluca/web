import { useEffect, useState } from "react";

import Section from "../Components/Section/Section";
import AboutMe from "./AboutMe";
import GameCard from "../Games/GameCard";
import ArticleCard from "../Articles/ArticleCard";
import style from './Home.module.css';
import GlobalConfig from "config/GlobalConfig";
import ActionButtonBlock from "AppV2/Components/Buttons/ActionButtonBlock";

async function loadGamesAsync(page) {
  const pageSize = 3;
  const start = page * pageSize;
  return await GlobalConfig.games.provider().get(start, start + pageSize, true)
}

async function loadArticlesAsync(page) {
  const pageSize = 3;
  const start = page * pageSize;
  return await GlobalConfig.articles.provider().get(start, start + pageSize, true);
}

export default function Home() {
  const [isGamesFilled, setIsGamesFilled] = useState(false)
  const [gamesPage, setGamesPage] = useState(0)
  const [games, setGames] = useState([])

  const [isArticlesFilled, setIsArticlesFilled] = useState(false)
  const [articlesPage, setArticlesPage] = useState(0)
  const [articles, setArticles] = useState([])

  function loadGames(page) {
    loadGamesAsync(page)
      .then(res => {
        if (res.length === 0) {
          setIsGamesFilled(true);
          return;
        }

        setGames(g => [...g, ...res]);
        setGamesPage(g => g + 1)
      });
  }

  function loadArticles(page) {
    loadArticlesAsync(page)
      .then(res => {

        if (res.length === 0) {
          setIsArticlesFilled(true);
          return;
        }

        setArticles(a => [...a, ...res]);
        setArticlesPage(p => p + 1)
      });
  }

  useEffect(() => {
    loadGames(0);
    loadArticles(0);
  }, [])

  return (
    <>
      <div>
        <Section title="Sobre mim">
          <AboutMe />
        </Section>

        <Section title="Jogos">
          <div className={style.grid}>
            {games.map(g => <GameCard key={g.key} game={g} />)}
          </div>
          <ActionButtonBlock
            hide={isGamesFilled}
            label="Carregar mais"
            onClick={() => loadGames(gamesPage)}
          />
        </Section>

        <Section title="Artigos">
          <div className={style.grid}>
            {articles.map(a => <ArticleCard key={a.key} article={a} />)}
          </div>
          <ActionButtonBlock
            hide={isArticlesFilled}
            label="Carregar mais"
            onClick={() => loadArticles(articlesPage)}
          />
        </Section>
      </div>
    </>
  )
}