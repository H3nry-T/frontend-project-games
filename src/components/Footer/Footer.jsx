import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <ol className={`${styles.footer}`} style={{ listStyle: "none" }}>
      <li className={styles.li}>Instagram</li>
      <li className={styles.li}>LinkedIn</li>
      <li className={styles.li}>Github</li>
      <li className={styles.li}>Codepen</li>
    </ol>
  );
};

export default Footer;
