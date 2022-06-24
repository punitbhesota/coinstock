import "./App.css";
import Cryptocurrency from "./Components/Cryptocurrency/Cryptocurrency";
import Stockmarket from "./Components/StockMarket/Stockmarket";
import Navigation from "./Components/Navigation/Navigation";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import CoinDetailPage from "./Components/CoinDetailPage/CoinDetailPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Cryptocurrency" component={Cryptocurrency} />
        <Route path="/Stockmarket" component={Stockmarket} />
        <Route path="/coins/:id" component={CoinDetailPage} />
        {/* <Route exact path="*" status={404} component={NotFound}/> */}
      </Switch>
    </div>
  );
}

export default App;
