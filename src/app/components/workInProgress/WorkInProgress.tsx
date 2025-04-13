"use client";

import Image from "next/image";
import styles from "./WorkInProgress.module.css";

export default function WorkInProgress() {
  return (
    <div className={styles.workInProgressContainer}>
      <div className={styles.logo}>
        <Image
          className="logo"
          alt="logo"
          src="/logos/velookup-logo.png"
          fill={true}
        />
      </div>
      <div className={styles.wpContent}>
        <h1 className={styles.wpCText}>Website Under Maintenance</h1>
        <p>We’re currently working on improvements. Please check back later.</p>
      </div>
    </div>
  );
}
