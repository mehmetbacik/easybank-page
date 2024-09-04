import React from "react";
import Image from "next/image";
import styles from "./styles/Features.module.scss";
import { features } from "@/data/featuresData";

const Features: React.FC = () => {
  return (
    <section className={styles.features}>
      <h2 className={styles.title}>Why Choose Easybank?</h2>
      <p className={styles.description}>
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
      <div className={styles.featureList}>
        {features.map((feature, index) => (
          <div key={index} className={styles.feature}>
            <div className={styles.imageWrapper}>
              <Image
                src={feature.image}
                alt={feature.title}
                width={72}
                height={72}
              />
            </div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
