import React from "react";
import Header from "../../components/Header/Header";
import styles from "./Cart.module.css";
export default function Cart() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <h1 className={styles.title}>Ничего не найдено</h1>
        </div>
      </div>
    </div>
  );
}
