import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { images } from "../assets/images";
import BodyContainerOne from "../components/BodyContainerOne";
import BodyContainerThree from "../components/BodyContainerThree";
import BodyContainerTwo from "../components/BodyContainerTwo";
import Footer from "../components/Footer";
import styles from "../styles/SubmitPage.module.css";
import { storeProps } from "../utils/types";
interface HomeProps {}

const SubmitPage = (props: HomeProps) => {
  const userData = useSelector((state: storeProps) => state?.userInfo?.data);

  return (
    <main>
      <section>
        <div className={styles.bannerContainer}>
          <div className={styles.formContainer}>
            <h1>Thank you for your request!</h1>
            <p>
              You’ve taken the first step. Our experts will get in touch with
              you soon.
            </p>
            <div className={styles.line}></div>
            <div className={styles.userDetailsContainer}>
              <div className={styles.detail}>
                <span>Company</span>
                <h1 className={styles.userInfo}>{userData?.company}</h1>
              </div>
              <div className={styles.detail}>
                <span>Name</span>
                <h1 className={styles.userInfo}>{userData?.name}</h1>
              </div>
              <div className={styles.detail}>
                <span>Phone</span>
                <h1 className={styles.userInfo}>{userData?.phone}</h1>
              </div>
              <div className={styles.detail}>
                <span>E-mail</span>
                <h1 className={styles.userInfo}>{userData?.email}</h1>
              </div>
            </div>
          </div>
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
        <Footer />
      </section>
    </main>
  );
};

export default SubmitPage;
