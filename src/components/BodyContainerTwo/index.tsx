import React from "react";
import styles from "../../styles/Home.module.css";
import { images } from "../../assets/images";

const BodyContainerTwo = () => {
  return (
    <div className={styles.bodyContainerTwo}>
      <div>
        <h1 className={styles.whySnubesText}>Why Snubes?</h1>
        <div className={styles.textContainer}>
          <h2 className={styles.textContainerHeading}>Trusted Know-How</h2>
          <p className={styles.textContainerDesc}>
            We have more than 20 years of experience and continuously check call
            centers for their quality and capabilities. Customers like Allianz
            trust Snubes industry knowledge.
          </p>
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.textContainerHeading}>Time and cost savings</h2>
          <p className={styles.textContainerDesc}>
            With Snubes you can easily compare prices, quality and availability,
            and find more potential suppliers. Reach your goal faster and save
            resources.
          </p>
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.textContainerHeading}>
            Satisfaction guaranteed
          </h2>
          <p className={styles.textContainerDesc}>
            We offer a validated data-based approach to procurement, rather than
            awarding contracts only based on the lowest price, an existing
            relationship or "gut feeling".
          </p>
        </div>
      </div>
    </div>
  );
};
export default BodyContainerTwo;
