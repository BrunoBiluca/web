import { useEffect, useState } from "react";

import Section from "../Components/Section/Section";
import AboutMe from "./AboutMe";
import GameCard from "../Games/GameCard";
import ArticleCard from "../Articles/ArticleCard";
import style from './Home.module.css';
import GlobalConfig from "config/GlobalConfig";
import Profile from "./Profile";

async function loadGames() {
  return await GlobalConfig.games.provider().get();
}

async function loadArticles() {
  return await GlobalConfig.articles.provider().get();
}

export default function Home() {
  const [games, setGames] = useState([])
  const [articles, setArticles] = useState([])

  useEffect(() => {
    loadGames().then(res => setGames(res));
    loadArticles().then(res => setArticles(res));
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