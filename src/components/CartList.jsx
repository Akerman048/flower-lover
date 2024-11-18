import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import styles from "./CartList.module.css";
import Form from "./common/Form";
import { FaShoppingCart } from "react-icons/fa";

export const CartList = ({ cart, setCart }) => {
  const [isClosed, setIsclosed] = useState(true);

  const handleClose = () => {
    setIsclosed(!isClosed);
    console.log(cart);
  };

  const handleRemoveItem = (indexToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((_, index) => index !== indexToRemove)
    );
  };

  useEffect(() => {
    // This effect will run every time `cartItems` is updated
    console.log("Cart items updated:", cart);
  }, [cart]);

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div
        className={`${styles.cartListWrapper} ${isClosed ? styles.closed : ""}`}
      >
        <IoMdClose onClick={handleClose} className={styles.cartListClose} />
        <Form></Form>
        {cart.map((item, index) => (
          <div key={index} className={styles.cartListItems}>
            <div key={index} className={styles.cartItem}>
              <img src={item.img} alt='/' className={styles.cartImg} />
              <div className={styles.cartItemDescr}>
                <div className={styles.cartItemTitle}>
                  {item.title} <span>x{item.quantity}</span>
                </div>
                <div className={styles.cartItemPrice}>
                  {item.price * item.quantity} ₴
                </div>
              </div>
              <IoMdClose
                className={styles.deleteItem}
                onClick={() => handleRemoveItem(index)}
              />
            </div>
          </div>
        ))}
      </div>
      {isClosed && (
        <div onClick={handleClose} className={styles.cartWrapper}>
          <FaShoppingCart className={styles.FaShoppingCart} />
          <div className={styles.cartAmountCounter}>{totalQuantity}</div>
        </div>
      )}
    </>
  );
};
