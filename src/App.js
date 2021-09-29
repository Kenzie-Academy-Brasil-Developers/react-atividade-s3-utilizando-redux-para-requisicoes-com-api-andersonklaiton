import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import SearchDigimon from "./pages/searchDigimon";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <SearchDigimon />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
