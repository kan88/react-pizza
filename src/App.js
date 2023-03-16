import { useEffect, useState } from "react";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import PizzaItem from "./components/PizzaItem/PizzaItem";
import Skeleton from "./components/Skeleton/Skeleton";
import Sort from "./components/Sort/Sort";
import "./scss/app.scss";
// import pizzas from "./assets/data/data.json";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const getPizzas = async () => {
    const response = await fetch(
      "https://64130d1db1ea744303210dcb.mockapi.io/api/pizzas"
    );
    const pizzas = await response.json();
    setPizzas(pizzas);
    setLoading(false);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {isLoading
                ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
                : pizzas.map((pizza, index) => (
                    <PizzaItem key={index} {...pizza} />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
