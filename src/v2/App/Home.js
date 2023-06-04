
import Section from "./Section";
import AboutMe from "./AboutMe";
import GameCard from "./GameCard";

export default function Home() {
  return (
    <div>
      <Section title="Sobre mim">
        <AboutMe />
      </Section>

      <Section title="Jogos">
        <GameCard />
      </Section>

      <Section title="Artigos">

      </Section>
    </div>
  )
}