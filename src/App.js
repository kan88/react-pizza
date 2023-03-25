import { createContext, useState } from "react";
import Header from "./components/Header/Header";
import { Home } from "./pages/Home/Home";

import "./scss/app.scss";
// import pizzas from "./assets/data/data.json";
export const SearchContext = createContext("");
function App() {
  const [value, setValue] = useState("");
  return (
    <SearchContext.Provider value={{ value, setValue }}>
      <div className="App">
        <div className="wrapper">
          <Header />
          <div className="content">
            <div className="container">
              <Home value={value} />
            </div>
          </div>
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
