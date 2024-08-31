import React from "react";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";
import Articles from "@/components/Articles/Articles";
import Footer from "@/components/Footer/Footer";
import styles from "./styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Features />
        <Articles />
      </main>
      <Footer />
    </div>
  );
}
