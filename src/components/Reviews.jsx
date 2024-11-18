import React from "react";
import BlockTitle from "./common/BlockTitle";
import styles from "./Reviews.module.css";
import Slider from "./common/Slider";
import { imagesSlider } from "../data/sliderIMG";

export const Reviews = () => {
  return (
    <section id='reviews' className={styles.reviewsWrap}>
      <div className={styles.titleWrap}>
        <BlockTitle
          title={"Our clients"}
          blockStyles={styles.reviewsTitle}
        ></BlockTitle>
      </div>
      <Slider images={imagesSlider}></Slider>
    </section>
  );
};
