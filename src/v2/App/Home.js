import ProfileImage from "./ProfileImage";
import styles from "./Home.module.css"
import BilucaIntro from "./BilucaIntro.strings";

import titlePattern from "./title_pattern.svg"

export default function Home() {
  return (
    <div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          <div className={styles.patternHolder}>
            <img src={titlePattern} alt="title pattern" />
          </div>

          <h1>Sobre mim</h1>
        </div>
        <div className={styles.about}>
          {/* about body */}
          <div className={styles.pictureHolder}>
            <ProfileImage />
            {/* resume */}
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
                    src="https://raw.githubusercontent.com/BrunoBiluca/BrunoBiluca/output/github-contribution-grid-snake.svg"
                    alt="Meus commits sendo exibidos como no jogo da cobrinha"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}