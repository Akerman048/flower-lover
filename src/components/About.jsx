import React from "react";
import BlockTitle from "./common/BlockTitle";
import styles from "./About.module.css";

import img1 from "../assets/images/aboutImg/1.png";
import img2 from "../assets/images/aboutImg/2.png";
import img3 from "../assets/images/aboutImg/3.png";
import AboutArticle from "./common/AboutArticle";

export const About = () => {
  const text1 = `We cooperate with the best suppliers of flowers and are ready to offer you a wide range of flowers, starting with local varieties and ending with rare imported options.
  Your loved one will receive the best gift, because we carefully select each flower for your bouquet.`;
  const text2 = `We are ready to assemble a unique bouquet by individual order. Our florists will implement any of your ideas!`;
  const text3 = `We make deliveries in Ukraine within 3 hours from the moment of payment of the order.`;
  return (
    <section id='about'>
      <div className={styles.titleWpar}>
        <BlockTitle
          title={"Quality in details"}
          blockStyles={styles.aboutTitle}
        ></BlockTitle>
      </div>
      <div className={styles.aboutWrapper}>
        <img className={styles.imgAbout} src={img1} />
        <AboutArticle title={"Control of freshness of flowers"} text={text1} />
        <AboutArticle title={"Arrangement of bouquets"} text={text1} />
        <img className={styles.imgAbout} src={img2} />

        <img className={styles.imgAbout} src={img3} />
        <AboutArticle title={"Fast delivery"} text={text1} />
      </div>
    </section>
  );
};
