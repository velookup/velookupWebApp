"use client";

import Image from "next/image";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          className="logo"
          alt="logo"
          src="/logos/velookup-logo.png"
          fill={true}
        />
      </div>

      <div className={styles.nav}>
        {/* <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a> */}
        {/* <a href="#">Contact</a> */}
      </div>
    </header>
  );
}
