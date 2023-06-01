import SocialMediaLinks from 'components/SocialMediaLinks/SocialMediaLinks';
import styles from './Footer.module.css'

export default function Footer() {

  let updateYear = 2023;

  return (
    <div className={styles.footer}>
      <SocialMediaLinks />
      <p>Criado por BrunoBiluca em {updateYear}</p>
    </div>
  );
}