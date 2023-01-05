import React from "react";
import styles from "../styles/aboutSection.module.css";


function About() {
  return (
    <section className={styles.aboutWrapper} id="about">
      <div className={styles.aboutContainer}>
        <div className={styles.aboutText}>
          <h1 className={styles.aboutHeader}>HER BALONCUĞUNDA TAT VAR</h1>
          <p className={styles.aboutDesc}>
            Benzersiz aromasıyla yepyeni bir tat sunmayı hedefleyen markamız
            eachecek, lezzetini ve ferahlatan tadını doğadan ve titizlikle
            yürütülen üretim işlemlerinden almaktadır. Bugüne kadar
            deneyimlemediğiniz tatlar eachecek şişelerinde keşfedilmeyi
            bekliyor.
          </p>
        </div>
        <img
          className={styles.aboutImg}
          src={require("../assets/images/second-min.png")}
          alt="muzlu ve ejder meyveli soda"
        />
      </div>
    </section>
  );
}

export default About;
