import React from "react";
import styles from "../../styles/Home.module.css";
import { images } from "../../assets/images";
import UserFooterFormComponent from "../UserFooterFormComponent";

interface BodyContainerFourProps {
  showFooterForm?: boolean;
}
const BodyContainerFour = ({
  showFooterForm = true,
}: BodyContainerFourProps) => {
  return (
    <div className={styles.bodyContainerFour}>
      <div className={styles.faqContainer}>
        <span className={styles.faqHeadingText}>
          Frequently Asked Questions
        </span>
        <div className={styles.faqTextWrapper}>
          <h2>Are the call centers verified?</h2>
          <p>
            All call centers in our database are checked by quality assurance
            experts. We also take a look at their data and track the key
            performance indicators. In addition, clients rate call centers and
            share their customer experience.
          </p>
        </div>
        <div className={styles.faqTextWrapper}>
          <h2>Which inbound services are offered at Snubes?</h2>
          <p>
            Our listed call centers offer a broad spectrum of customer services,
            such as technical support, first-level support, helpdesk,
            overflow/after-hours support, etc.
          </p>
        </div>
        <div className={styles.faqTextWrapper}>
          <h2>Are there any costs?</h2>
          <p>
            The services of Snubes are free of charge and our call center
            experts advise you independently and personally. Together we strive
            to find the optimal solution.
          </p>
        </div>
        <div>
          <img src={images.bestInternetService} alt="Best internet service" />
        </div>
      </div>
      {showFooterForm && <UserFooterFormComponent />}
    </div>
  );
};

export default BodyContainerFour;
