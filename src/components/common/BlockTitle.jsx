import React from "react";
import styles from "./BlockTitle.module.css";

export default function BlockTitle({ title, blockStyles }) {
  const blockTitle = `${styles.blockTitle} ${blockStyles}`;

  return <div className={blockTitle}>{title}</div>;
}
