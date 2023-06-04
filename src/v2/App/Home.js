import { useEffect, useState } from "react";

import Section from "./Section";
import AboutMe from "./AboutMe";
import GameCard from "./GameCard";
import ArticleCard from "./ArticleCard";
import style from './Home.module.css';
import GlobalConfig from "config/GlobalConfig";

export default function Home() {
  const [games, setGames] = useState([])

  useEffect(() => {
    async function loadGames() {
      const gamesProvider = GlobalConfig.games.provider()
      return await gamesProvider.get();
    };
    loadGames().then(res => setGames(res));
  }, [])

  return (
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
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </Section>
    </div>
  )
}