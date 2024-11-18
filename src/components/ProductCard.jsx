import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./ProductCard.module.css";

export default function ProductCard({ flowerData, addToCart }) {
  const [flowerAmount, setFlowerAmount] = useState(1);
  const [isActive, setIsActive] = useState(false);

  const cardRef = useRef(null);

  const showOrderCard = useCallback(() => {
    setIsActive((prevState) => !prevState);
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (cardRef.current && !cardRef.current.contains(event.targer)) {
      setIsActive(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [handleClickOutside]);

  const increase = () => setFlowerAmount(flowerAmount + 1);
  const decrease = () => {
    if (flowerAmount > 1) {
      setFlowerAmount(flowerAmount - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({ ...flowerData, quantity: flowerAmount });
  };

  return (
    <div ref={cardRef} onClick={showOrderCard} className={styles.cardItem}>
      <img className={styles.cardImg} src={flowerData.img} />
      <div className={styles.flowerDescr}>
        <div className={styles.flowerPrice}>
          {flowerData.price} {"\u20B4"}
        </div>
        <div className={styles.flowerTitle}>{flowerData.title}</div>
        <div className={styles.selectQuantityWrapper}>
          <div className={styles.amountCounter}>
            <span onClick={decrease}>-</span>
            <div>{flowerAmount}</div>
            <span onClick={increase}>+</span>
          </div>
          <button className={styles.orderbutton} onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
