"use client";

import Image from "next/image";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Header with Icon */}
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Image
            src="/logos/velookup-logo.png"
            alt="Velookup Logo"
            width={200}
            height={60}
            className={styles.logo}
          />
        </div>
      </header>

      {/* Main Content - Work Progress */}
      <main className={styles.main}>
        <div className={styles.workProgress}>
          <h1 className={styles.title}>Website Under Construction</h1>
          <div className={styles.progressIcon}>
            <span className={styles.icon}>🚧</span>
            <span className={styles.icon}>⚙️</span>
            <span className={styles.icon}>🔧</span>
          </div>
          <p className={styles.subtitle}>
            {`We're working hard to bring you something amazing`}
          </p>
        </div>
      </main>

      {/* Footer with Contact Details */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.contactSection}>
            <div className={styles.contactItem}>
              <h3>Address</h3>
              <p>IT SEZ, Madurawada</p>
              <p>Visakhapatnam, Andhra Pradesh</p>
              <p>530048</p>
            </div>
            <div className={styles.contactItem}>
              <h3>Contact</h3>
              <p>Phone: +91 8977733180</p>
              <p>Phone: +91 8977733181</p>
              <p>Email: support@velookup.com</p>
            </div>
          </div>
          <div className={styles.copyright}>
            <p>&copy; 2024 Velookup. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 