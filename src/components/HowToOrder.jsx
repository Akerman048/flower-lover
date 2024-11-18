import React from "react";
import BlockTitle from "./common/BlockTitle";
import styles from "./HowToOrder.module.css";
import howtoorderBG from "../assets/images/howtoorderBG.png";
import Form from "./common/Form";
import { FiCheck } from "react-icons/fi";

export const HowToOrder = () => {
  return (
    <section id='howToOrder' className={styles.howToOrderWrapper}>
      <img
        src={howtoorderBG}
        alt='howtoorderBG'
        className={styles.howtoorderBG}
      />
      <BlockTitle
        title={"Can't decide on a bouquet?"}
        blockStyles={styles.howToOrderTitle}
      />
      <div className={styles.howToOrderContent}>
        <div className={styles.howToOrderForm}>
          <h4>
            <span>Submit an application</span> and they will call you within one
            minute
          </h4>
          <Form />
        </div>
        <div className={styles.howToOrderManagerTitle}>
          <h4>Our manager by phone:</h4>
          <ul className={styles.howToOrderManagerDescr}>
            <li><FiCheck className={styles.check}/>Will answer any questions</li>
            <li><FiCheck className={styles.check}/>Select the solution accordingly to your requests and wishes</li>
            <li>
            <FiCheck className={styles.check}/>Will prepare a unique offer and will tell you in detail about our
              bouquets
            </li>
            <li><FiCheck className={styles.check}/>Will arrange a surprise gift for you</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
