import "./App.css";
import Cryptocurrency from "./Pages/Cryptocurrency/Cryptocurrency";
import Stockmarket from "./Components/StockMarket/Stockmarket";
import Navigation from "./Components/Navigation/Navigation";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import CoinDetailPage from "./Pages/CoinDetailPage/CoinDetailPage";
import Second from "./Pages/Second/Second";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
          <Second />
        </Route>

        <Route path="/Cryptocurrency" component={Cryptocurrency} />
        <Route path="/Stockmarket" component={Stockmarket} />
        <Route path="/coins/:id" component={CoinDetailPage} />
      </Switch>
    </div>
  );
}

export default App;
