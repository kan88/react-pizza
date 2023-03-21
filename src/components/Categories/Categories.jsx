import React from "react";

export default function Categories(props) {
  const { filter, setFilter } = props;
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  console.log(filter);

  const handleActive = (value) => {
    setFilter(value);
  };

  return (
    <div className="categories">
      <ul className="categories__list">
        {categories.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => handleActive(index)}
              className={
                filter === index
                  ? "active categories__item"
                  : "categories__item"
              }
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
