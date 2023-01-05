import React, { useEffect } from "react";
import styles from "../styles/header.module.css";
import { useState } from "react";

function CustomHeader() {
  const [navbar, setNavbar] = useState(false);

  const chngBackground = () => {
    if (window.pageYOffset > 20.0) {
      setNavbar(true);
    } else if (window.pageYOffset === 0) {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", chngBackground);
  });

  return (
    <header className={styles.mainHeader}>
      <div
        className={styles.mainHeadeWrapper}
        style={{
          height: navbar ? "60px" : "96px",
          backgroundColor: navbar ? "rgba(0,0,0)" : "rgba(0,0,0,0)",
        }}>
        <div className={styles.siteNameLogo}>
          <a href="#" className={styles.siteName}>
            eachecek
          </a>
        </div>
        <div className={styles.sectionLinksPlace}>
          <ul className={styles.sectionLinks}>
            <li className={styles.sectionLinkItem}>
              <a href="#products" className={styles.sectionLink}>
                Ürünlerimiz
              </a>
            </li>
            <li className={styles.sectionLinkItem}>
              <a href="#about" className={styles.sectionLink}>
                Hakkımızda
              </a>
            </li>
            <li className={styles.sectionLinkItem}>
              <a href="#contact" className={styles.sectionLink}>
                İletişim
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default CustomHeader;
