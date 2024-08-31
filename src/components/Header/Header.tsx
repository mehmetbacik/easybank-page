"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles/Header.module.scss";
import { menuItems } from "@/data/menuData";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/img/logo.svg"
          alt="Easybank Logo"
          width={150}
          height={40}
        />
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <Image
          src={menuOpen ? "/img/icon-close.svg" : "/img/icon-hamburger.svg"}
          alt="Menu Icon"
          width={24}
          height={24}
        />
      </div>
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
        <ul className={styles.menu}>
          {menuItems.map((item) => (
            <li key={item.id} className={styles.menuItem}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.cta}>
        <button className={styles.inviteButton}>Request Invite</button>
      </div>
    </header>
  );
};

export default Header;
