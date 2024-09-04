import React from "react";
import Image from "next/image";
import styles from "./styles/Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Next generation digital banking</h1>
        <p className={styles.description}>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className={styles.inviteButton}>Request Invite</button>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src="/img/image-mockups.png"
          alt="Hero Image"
          layout="responsive"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
};

export default Hero;
