import React from "react";
import styles from "../styles/productStyle.module.css";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <section
      className="flex flex-col justify-center bg-[#dddddd] pt-10"
      id="products">
      <h1 className=" text-center font-bold text-4xl relative mb-20">
        SUNDUĞUMUZ TATLAR
      </h1>
      <div className={styles.products}>
        <ProductCard
          text={"Oralet aromalı"}
          source={require("../assets/images/WhatsApp Image 2022-12-29 at 8.31.25 PM (1).jpeg")}></ProductCard>
        <ProductCard
          text={"Kuşburnu aromalı"}
          source={require("../assets/images/WhatsApp Image 2022-12-29 at 8.31.25 PM (2).jpeg")}></ProductCard>
        <ProductCard
          text={"Sütlü Kakaolu"}
          source={require("../assets/images/WhatsApp Image 2022-12-29 at 8.31.25 PM.jpeg")}></ProductCard>
        <ProductCard
          text={"Ejder Meyve aromalı"}
          source={require("../assets/images/WhatsApp Image 2022-12-29 at 8.31.26 PM (1).jpeg")}></ProductCard>
        <ProductCard
          text={"Kivi aromalı"}
          source={require("../assets/images/WhatsApp Image 2022-12-29 at 8.31.26 PM (2).jpeg")}></ProductCard>
        <ProductCard
          text={"Muzlu Sütlü"}
          source={require("../assets/images/WhatsApp Image 2022-12-29 at 8.31.26 PM.jpeg")}></ProductCard>
      </div>
    </section>
  );
}

export default Products;
