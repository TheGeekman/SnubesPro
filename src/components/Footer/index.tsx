import React from "react";
import styles from "../../styles/Home.module.css";
import { images } from "../../assets/images";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerMenuContainer}>
        <img
          src={images.bestInternetService}
          className={styles.footerImage}
          alt={"logo"}
        />
        <ul>
          <li>About us</li>
          <li>Become a Partner</li>
          <li>FAQ</li>
        </ul>
        <ul>
          <li>Imprint</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
        <ul>
          <li>support@snubes.com</li>
          <li>+49 (0) 305 5645327</li>
          <li>
            <div className={styles.socialIcons}>
              <i className="fa fa-facebook" aria-hidden="true"></i>
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.footerBottom}>
        <span className={styles.copyRightText}>
          © 2019 Snubes GmbH All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
