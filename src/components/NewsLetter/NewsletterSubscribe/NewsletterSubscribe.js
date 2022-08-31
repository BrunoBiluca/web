import GlobalConfig from "config/GlobalConfig";
import NewsLetterInput from "../NewsLetterInput/NewsLetterInput";

const styles = {
  newsLetter: {
    display: "block",
    width: "70%",
    margin: "20px auto"
  }
}

export default function NewsletterSubscribe() {

  if(!GlobalConfig.newsletter.enable)
    return;

  return <div className={styles.newsLetter} >
    <p>
      Hi, sign up for my newsletter to get game development and technology related content.
    </p>
    <NewsLetterInput />
  </div>;
}
