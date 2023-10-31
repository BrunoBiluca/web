import ProfileImage from "./ProfileImage";
import styles from "./AboutMe.module.css";
import BilucaIntro from "./BilucaIntro.strings";
import LinkButton from "AppV2/Components/Buttons/LinkButton";

export default function AboutMe() {
  return <div className={styles.about}>
    <div className={styles.pictureHolder}>
      <ProfileImage />
      <LinkButton label="Resume" link={"/resume"} />
    </div>
    <div className={styles.description}>
      <p>{BilucaIntro.strings.intro_1.toString()}</p>
      <p>{BilucaIntro.strings.intro_2.toString()}</p>
      <p>{BilucaIntro.strings.intro_3.toString()}</p>
      <div>
        <h3>{BilucaIntro.strings.content_title.toString()}</h3>
        <div style={{ textAlign: "center" }}>
          <a
            href="https://github.com/BrunoBiluca"
            target="_blank"
            rel="noreferrer external"
          >
            <img
              style={{ width: '100%', height: 'auto' }}
              src="https://raw.githubusercontent.com/BrunoBiluca/BrunoBiluca/output/github-contribution-grid-snake.svg"
              alt="Meus commits sendo exibidos como no jogo da cobrinha" />
          </a>
        </div>
      </div>
    </div>
  </div>;
}
