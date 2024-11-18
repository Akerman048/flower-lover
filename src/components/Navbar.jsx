import React, { useState } from "react";

import { navLinks } from  "../constants/navLinks";
import { ReactComponent as Logo } from "../assets/images/logos/logo.svg";
import { TfiAlignJustify } from "react-icons/tfi";
import { FiX } from "react-icons/fi";
import { Menu } from "./common/Menu";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [burgerSwitch, setburgerSwitch] = useState(false);

  const toggleBurger = () => {
    setburgerSwitch(!burgerSwitch);
    console.log(burgerSwitch);
  };

  return (
    <nav className={styles.navbarWrapper}>
      <Logo className='mainLogo' />
      {burgerSwitch ? (
        <div className={styles.burgerWrapper}>
          <Menu
            st={styles.navLinksBurgerWrapper}
            clickHandler={toggleBurger}
            links={navLinks}
          />
          <FiX className={styles.burgerClose} onClick={toggleBurger} />
        </div>
      ) : (
        <>
          <Menu st={styles.navLinksWrapper} links={navLinks} />
        </>
      )}

      <TfiAlignJustify className={styles.burgerOpen} onClick={toggleBurger} />
    </nav>
  );
};
