import React, { useState } from "react";

export default function Categories() {
  const [active, setActive] = useState(0);
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const handleActive = (num) => {
    setActive(num);
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
                active === index
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
