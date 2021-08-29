import "./App.css";
import "./component/header/Header.css";
import "./component/footer/Footer.css";
import Header from "./component/header/Header";
import Home from "./component/footer/Footer";
import Login from "./component/Login/Login";
import { Route, Switch } from "react-router-dom";
import Register from "./component/Register/Register";

function App(props) {
  return (
    <div className="App">
      <Header />
      <div className="mine">
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/Login" exact render={() => <Login />} />
          <Route path="/Register" exact render={() => <Register />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
