import "./App.css";
import Cryptocurrency from "./Components/Cryptocurrency";
import Stockmarket from "./Components/Stockmarket";
import Navigation from "./Components/Navigation";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import CoinDetailPage from "./Components/CoinDetailPage";

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
