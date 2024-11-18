import React from "react";
import { Button } from "./common/Button";
import styles from "./Hero.module.css";

import heroBG from "../assets/images/heroBG.png";
import flowerIcon from "../assets/images/advantages/flower.png";
import locationIcon from "../assets/images/advantages/location.png";
import earthIcon from "../assets/images/advantages/earth.png";

export const Hero = () => {
  return (
    <div className={styles.wrapper} id='hero'>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <i>Incredible</i>
          <br /> <span>bouquets</span> <i>of fresh flowers</i>
        </h1>
        <h3 className={styles.subtitle}>With delivery in Kyiv within 1 hour</h3>
        <div className={styles.button}>
          <Button />
        </div>
      </div>

      <img src={heroBG} className={styles.heroBg} />

      <div className={styles.advantages}>
        <div className={styles.advantagesItem}>
          <img src={flowerIcon}></img>
          <p>Daily update of fresh flowers</p>
        </div>
        <div className={styles.advantagesItem}>
          <img src={locationIcon}></img>
          <p>Free delivery anywhere in the city</p>
        </div>
        <div className={styles.advantagesItem}>
          <img src={earthIcon}></img>
          <p>More than 1000 varieties of flowers from all over the world</p>
        </div>
      </div>
    </div>
  );
};
