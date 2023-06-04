
import Section from "./Section";
import AboutMe from "./AboutMe";
import GameCard from "./GameCard";
import ArticleCard from "./ArticleCard";
import style from './Home.module.css';

export default function Home() {
  return (
    <div>
      <Section title="Sobre mim">
        <AboutMe />
      </Section>

      <Section title="Jogos">
        <div className={style.grid}>
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
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