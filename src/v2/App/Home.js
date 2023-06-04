import ProfileImage from "./ProfileImage";
import styles from "./Home.module.css"
import BilucaIntro from "./BilucaIntro.strings";

import Section from "./Section";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Section title="Sobre mim">
        <div className={styles.about}>
          <div className={styles.pictureHolder}>
            <ProfileImage />
            <Link to="/resume"><button className={styles.flatButton}>Resume</button></Link>
          </div>
          <div className={styles.description}>
            <p>{BilucaIntro.strings.intro_1.toString()}</p>
            <p>{BilucaIntro.strings.intro_2.toString()}</p>
            <p>{BilucaIntro.strings.intro_3.toString()}</p>
            <p>{BilucaIntro.strings.intro_4.toString()}</p>
            <p>{BilucaIntro.strings.intro_5.toString()}</p>
            <div>
              <h3>Veja minhas últimas contribuições 🧑‍💻</h3>
              <div style={{ textAlign: "center" }}>
                <a
                  href="https://github.com/BrunoBiluca"
                  target="_blank"
                  rel="noreferrer external"
                >
                  <img
                    style={{ width: '100%', height: 'auto' }}
                    src="https://raw.githubusercontent.com/BrunoBiluca/BrunoBiluca/output/github-contribution-grid-snake.svg"
                    alt="Meus commits sendo exibidos como no jogo da cobrinha"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}