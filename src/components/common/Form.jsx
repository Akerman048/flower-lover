import React, { useState } from "react";
import styles from "./Form.module.css";

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <form className={styles.formWrapper}>
      <input className={styles.formInput}
        type='text'
        id='name'
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input className={styles.formInput}
        type='tel'
        id='phone'
        value={phone}
        placeholder="Phone"
        onChange={(e) => setPhone(e.target.value)}
      ></input>
      <button type='submit' className={styles.formButton}>Order now</button>
    </form>
  );
}
