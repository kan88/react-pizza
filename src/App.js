import { useState } from "react";
import Header from "./components/Header/Header";
import { Home } from "./pages/Home/Home";

import "./scss/app.scss";
// import pizzas from "./assets/data/data.json";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <div className="wrapper">
        <Header value={value} setValue={setValue} />
        <div className="content">
          <div className="container">
            <Home value={value} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
