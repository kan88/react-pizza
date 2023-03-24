import React, { useEffect, useState } from "react";
import Categories from "../../components/Categories/Categories";
import Pagination from "../../components/Pagination/Pagination";
import PizzaItem from "../../components/PizzaItem/PizzaItem";
import Skeleton from "../../components/Skeleton/Skeleton";
import Sort from "../../components/Sort/Sort";

export function Home({ value }) {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [sort, setSort] = useState({
    name: "популярности DESC",
    sortProperty: "rating",
  });
  const [filter, setFilter] = useState(0);
  const sortName = sort.sortProperty.replace("-", "");
  const sortValue = sort.sortProperty.includes("-") ? "asc" : "desc";
  const sortFind = `sortBy=${sortName}&order=${sortValue}`;
  const filterFind = filter > 0 ? `category=${filter}&` : "";
  const searchValue = value ? `&search=${value}` : "";
  const [activePage, setActivePage] = useState(1);

  const getPizzas = async () => {
    setLoading(true);
    const response = await fetch(
      `https://64130d1db1ea744303210dcb.mockapi.io/api/pizzas?page=${activePage}&limit=4&${filterFind}${sortFind}${searchValue}`
    );
    const pizzas = await response.json();
    setPizzas(pizzas);
    setLoading(false);
  };
  useEffect(() => {
    getPizzas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, sort, value, activePage]);
  return (
    <>
      <div className="content__top">
        <Categories filter={filter} setFilter={(i) => setFilter(i)} />
        <Sort sort={sort} setSort={(i) => setSort(i)} />
      </div>
      <h2 className="content__title">Все пиццы Мира</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((pizza, index) => <PizzaItem key={index} {...pizza} />)}
      </div>
      <div>
        <Pagination setActivePage={setActivePage} />
      </div>
    </>
  );
}
