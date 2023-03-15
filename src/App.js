import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import PizzaItem from "./components/PizzaItem/PizzaItem";
import Sort from "./components/Sort/Sort";
import "./scss/app.scss";
import pizzas from "./assets/data/data.json";

function App() {
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
              {pizzas.map((pizza, index) => (
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
