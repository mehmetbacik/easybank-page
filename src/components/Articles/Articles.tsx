import React from "react";
import Image from "next/image";
import styles from "./styles/Articles.module.scss";
import { articles } from "@/data/articlesData";

const Articles: React.FC = () => {
  return (
    <section className={styles.articles}>
      <div className={`container mx-auto px-4 ${styles.content}`}>
        <h2 className={styles.title}>Latest Articles</h2>
        <div className={styles.cards}>
          {articles.map((article, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={article.image}
                  alt={article.title}
                  width={350}
                  height={233}
                />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.author}>By {article.author}</p>
                <h3 className={styles.cardTitle}>{article.title}</h3>
                <p className={styles.description}>{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
