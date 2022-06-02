import React from "react";
import styles from "../../styles/Home.module.css";
import { images } from "../../assets/images";
import { useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
export const Header = () => {
  const [showMenu, setShowMenu] = useState(true);

  const { height, width } = useWindowDimensions();

  let logoImage = width < 1020 ? images.snubesTextLogo : images.headerLogo;
  let tabletClass = showMenu ? styles.tabletClass : "";

  return (
    <header>
      <div className={styles.headerContainer}>
        <img alt={"Snubes"} className={styles.headerLogo} src={logoImage} />
        <div className={styles.optionContainer}>
          <ul
            id="menu-primary"
            className={`${styles.navBarContainer} ${tabletClass}`}
          >
            <li className={styles.navLink}>About Us</li>
            <li className={styles.navLink}>How it works</li>
            <li className={styles.navLink}>Become a Partner</li>
            <li className={styles.navLink}>EUR</li>
            <li className={styles.navLink}>EN</li>
            <li className={styles.navLink}>Sign In</li>
            <li className={styles.navLink}>Get Access</li>
          </ul>
          <div className={styles.toggle}>
            <label className={styles["toggle-link"]}>
              <button
                className={styles.btnToggleClass}
                onClick={() => setShowMenu(!showMenu)}
              >
                <img src={images.toggle1} />
              </button>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};
