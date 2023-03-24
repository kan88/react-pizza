import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";

export default function Pagination({ setActivePage }) {
  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(evt) => setActivePage(evt.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
      pageLinkClassName={styles.pagination__item}
      activeLinkClassName={styles.pagination__active}
      previousLinkClassName={styles.pagination__array}
      nextLinkClassName={styles.pagination__array}
      renderOnZeroPageCount={null}
    />
  );
}
