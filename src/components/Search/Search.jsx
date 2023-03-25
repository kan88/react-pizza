import React, { useContext } from "react";
import { SearchContext } from "../../App";
import styles from "./Search.module.css";

export default function Search() {
  const { value, setValue } = useContext(SearchContext);

  return (
    <div className={styles.search}>
      <svg
        className={styles.search__icon}
        height="24"
        viewBox="0 0 32 32"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title />
        <g id="search">
          <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
        </g>
      </svg>
      <input
        onChange={(evt) => setValue(evt.target.value)}
        value={value}
        className={styles.search__input}
        placeholder="Search..."
      />
      <svg
        onClick={() => setValue("")}
        className={styles.search__clear}
        height="24"
        viewBox="0 0 42 42"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
        <path d="M0 0h48v48H0z" fill="none" />
      </svg>
    </div>
  );
}
