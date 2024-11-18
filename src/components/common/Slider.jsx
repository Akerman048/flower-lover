import React from "react";
import styles from "./Slider.module.css";
import { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

export default function Slider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 4 ? 0 : prevIndex + 1
    );
  };

  const prevIndex = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 4 : prevIndex - 1
    );
  };
  return (
    <div className={styles.slider}>
      <div className={styles.sliderContainer}>
        <div
          className={styles.sliderWrapper}
          style={{
            transform: `translateX(-${currentIndex * (100 / 4)}%)`,
          }}
        >
          {images.map((image, index) => (
            <div className={styles.slide} key={index}>
              <img src={image} />
            </div>
          ))}
        </div>
      </div>
      <button className={styles.prev} onClick={prevIndex}>
        <FiChevronLeft className={styles.sliderArrows} />
      </button>
      <button className={styles.next} onClick={nextSlide}>
        <FiChevronRight className={styles.sliderArrows} />
      </button>
    </div>
  );
}
