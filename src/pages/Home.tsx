import React from "react";
import { images } from "../assets/images";
import { addDetails } from "../redux/store/slices/userSlice";
import styles from "../styles/Home.module.css";
import UserFormComponent from "../components/UserFormComonent";
import BodyContainerOne from "../components/BodyContainerOne";
import BodyContainerTwo from "../components/BodyContainerTwo";
import BodyContainerThree from "../components/BodyContainerThree";
import BodyContainerFour from "../components/BodyContainerFour";
import Footer from "../components/Footer";

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <main>
      <section>
        <div className={styles.bannerContainer}>
          <UserFormComponent />
          <div className={styles.bannerTextContainer}>
            <div className={styles.welcomeText}>
              Welcome to Europe’s largest call center database{" "}
            </div>
            <div className={styles.achievementsContainer}>
              <div className={styles.achievement}>
                <div className={styles.achievementNum}>500+</div>
                <div className={styles.achievementText}>Tenders</div>
              </div>
              <div className={styles.achievement}>
                <div className={styles.achievementNum}>200+</div>
                <div className={styles.achievementText}>Callcenter</div>
              </div>
              <div className={styles.achievement}>
                <div className={styles.achievementNum}>375.000</div>
                <div className={styles.achievementText}>Agents available</div>
              </div>
              <div className={styles.achievement}>
                <div className={styles.achievementNum}>85%</div>
                <div className={styles.achievementText}>Faster sourcing</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tabletBanner}>
          <div className={styles.bannerTextContainer}>
            <div className={styles.welcomeText}>
              Welcome to Europe’s largest call center database{" "}
            </div>
            <div className={styles.achievementsContainer}>
              <div className={styles.achievement}>
                <div className={styles.achievementNum}>500+</div>
                <div className={styles.achievementText}>Tenders</div>
              </div>
              <div className={styles.achievement}>
                <div className={styles.achievementNum}>200+</div>
                <div className={styles.achievementText}>Callcenter</div>
              </div>
              <div className={styles.achievement}>
                <div className={styles.achievementNum}>375.000</div>
                <div className={styles.achievementText}>Agents available</div>
              </div>
              <div className={styles.achievement}>
                <div className={styles.achievementNum}>85%</div>
                <div className={styles.achievementText}>Faster sourcing</div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Body Part One */}
        <BodyContainerOne />
        <div className={styles.hr}></div>

        {/* Page Body Part Two */}
        <BodyContainerTwo />
        <div className={styles.hr}></div>

        {/* Page Body Part Three */}
        <BodyContainerThree />
        <div className={styles.hr}></div>

        {/* Page Body Part Four */}
        <BodyContainerFour />
        <Footer />
      </section>
    </main>
  );
};

export default Home;
