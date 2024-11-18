import React from "react";
import styles from "./AboutArticle.module.css";

export default function AboutArticle({ title, text }) {
  return (
    <div className={styles.articleContainer}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
