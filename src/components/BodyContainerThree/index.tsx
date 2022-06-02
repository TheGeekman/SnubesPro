import React from "react";
import styles from "../../styles/Home.module.css";
import { images } from "../../assets/images";

const BodyContainerThree = () => {
  return (
    <div className={styles.bodyContainerThree}>
      <div className={styles.mainContainer}>
        <div>
          <img src={images.talixoLogo} alt={"talixo"} />
        </div>
        <p>
          “Finding a suitable outsourcing service provider through Snubes was
          very easy and our personal consultant helped us every step of the way.
          After a short time we had good offers on the table. An on-site visit
          confirmed the positive impression and we have now found a matching
          partner. Thank you for your great support, which has helped us a lot
          in the selection process.”
        </p>
        <span className={styles.authorDetails}>
          <span className={styles.textBold}>Jan Brenneke</span>, VP Operations
        </span>
      </div>
      <div className={styles.logoContainer}>
        <img src={images.allianz} alt={"allianz"} />
        <img src={images.creditshelf} alt={"creditshelf"} />
        <img src={images.usercentrics} alt={"usercentrics"} />
        <img src={images.laserhub} alt={"laserhub"} />
        <img src={images.talixo2} alt={"talixo"} />
      </div>
    </div>
  );
};

export default BodyContainerThree;
