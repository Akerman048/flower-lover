import React from "react";
import styles from "./Contacts.module.css";
import logo from "../assets/images/logos/logo.svg";
import { Menu } from "./common/Menu";
import { navLinks } from "../constants/navLinks";
import { FaPhoneAlt } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
export const Contacts = () => {
  return (
    <section id='contacts'>
      <div className={styles.contactsWrapper}>
        <div>
          <Menu links={navLinks} st={styles.contactsMenu} />
        </div>
        <div className={styles.contactsLogoNSoc}>
          <img src={logo} className={styles.contactsLogo} />
          <div className={styles.contactsIconsWrapper}>
            <FaPhoneAlt className={styles.contactsIcons} />
            <BsInstagram className={styles.contactsIcons} />
            <FaFacebookF className={styles.contactsIcons} />
          </div>
        </div>
        <div className={styles.contactsInfo}>
          <div className={styles.contactsInfoItem}>
            <a href='tel:+380977775577'>+38097 777 55 77</a>{" "}
            <span>Our phone number</span>
          </div>
          <div className={styles.contactsInfoItem}>
            <a href='mailto:info@floverlover.ua'>info@floverlover.ua</a>
            <span>Contact e-mail</span>
          </div>
          <div className={styles.contactsInfoItem}>
            Kyiv St. Mariupolska, 14.<span>Our store</span>
          </div>
        </div>
      </div>
    </section>
  );
};
