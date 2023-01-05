import React from "react";
import styles from "../styles/hero.module.css";
import { Player } from "@lottiefiles/react-lottie-player";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <h1 className={styles.siteHeader}>
          BENZERSİZ TADIYLA FERAHLATAN <span>eachecek</span>
        </h1>
      </div>
      <a href="#about" className={styles.downArrow}>
        <Player
          autoplay
          loop
          src="https://assets8.lottiefiles.com/packages/lf20_io6xlvmk.json"
          style={{ height: "100px", width: "100px", color: "black" }}></Player>
      </a>
    </section>
  );
}

export default Hero;
