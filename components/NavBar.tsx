import styles from "./NavBar.module.css";
import React from "react";
import { ActiveLink } from "./ActiveLink";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const NavBar = () => {
  return (
    <nav className={styles.menu_Container}>
      {menuItems.map(({ text, href }) => {
        return <ActiveLink key={href} text={text} href={href} />;
      })}
    </nav>
  );
};
