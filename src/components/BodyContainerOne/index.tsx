import React from "react";
import styles from "../../styles/Home.module.css";
import { images } from "../../assets/images";
const BodyContainerOne = () => {
  return (
    <div className={styles.bodyContainerOne}>
      <div className={styles.textWithImgWrapper}>
        <img src={images.signupImg} alt="Signup" />
        <h1 className={styles.textHeading}>Sign Up for free</h1>
        <p className={styles.textDesc}>
          Signing up and setting up your project takes less than 5 minutes
        </p>
      </div>
      <div className={styles.textWithImgWrapper}>
        <img src={images.sourceSmarterImg} alt="Source smarter" />
        <h1 className={styles.textHeading}>Source smarter</h1>
        <p className={styles.textDesc}>
          Our data-based AI and our experts will help you find exactly what you
          are looking for
        </p>
      </div>
      <div className={styles.textWithImgWrapper}>
        <img src={images.receiveOfferImg} alt="Receive Offer" />
        <h1 className={styles.textHeading}>Receive offers</h1>
        <p className={styles.textDesc}>
          With our insights you always receive high-quality proposals at the
          best price
        </p>
      </div>
    </div>
  );
};

export default BodyContainerOne;
