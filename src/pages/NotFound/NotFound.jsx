import React from "react";
import Header from "../../components/Header/Header";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <h1 className={styles.title}>Ничего не найдено</h1>
          <p className={styles.smile}>
            🙁🙁🙁🙁🙁🙁🙁🙁🙁🙁🙁🙁🙁🙁🙁🙁🙁🙁🙁🙁🙁🙁
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
