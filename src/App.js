import Header from "./components/Header/Header";
import { Home } from "./pages/Home/Home";

import "./scss/app.scss";
// import pizzas from "./assets/data/data.json";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Home />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
