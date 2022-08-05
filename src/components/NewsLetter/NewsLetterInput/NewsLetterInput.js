import React, { useState } from 'react';
import styles from './NewsLetterInput.module.css';
import NewsLetterRequest from '../NewsLetterRequest';
import { validateEmail } from '../../../helpers/ValidationValues';
import { FaCheckCircle } from 'react-icons/fa';

const NewsLetterInput = () => {

  const thanksMessage = "Thanks for subscribe for my Newsletter, soon I will provide a lot of new content";

  let [newsLetterEmail, setNewsLetterEmail] = useState("");
  let [submitDisabled, setSubmitDisabled] = useState(true);
  let [submitSuccessfully, setSubmitSuccessfully] = useState(false);

  function onEmailChanged(val) {
    let value = val.target.value;
    if (validateEmail(value)) {
      setSubmitDisabled(false);
      setNewsLetterEmail(value);
      return;
    }

    setSubmitDisabled(true);
    setNewsLetterEmail(value);
  }

  function submitNewsLetter() {
    new NewsLetterRequest().post({
      email: newsLetterEmail,
      active: true
    })
      .then(_ => {
        setSubmitSuccessfully(true);
      })
      .catch()
  }

  return (
    <div
      className={styles.newsLetterInput} data-testid="news-letter-subscribe"
    >
      <div hidden={submitSuccessfully} className={styles.newsLetterForm}>
        <input
          onChange={onEmailChanged}
          placeholder="email"
        />
        <button
          disabled={submitDisabled}
          onClick={submitNewsLetter}
        >
          Subscribe
        </button>
      </div>
      <div hidden={!submitSuccessfully} className={styles.newsLetterMessage}>
        <FaCheckCircle />
        <span>{thanksMessage}</span>
      </div>
    </div>
  );

}

NewsLetterInput.propTypes = {};

NewsLetterInput.defaultProps = {};

export default NewsLetterInput;
