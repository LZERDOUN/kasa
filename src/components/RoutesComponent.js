import { Switch, Route } from "react-router-dom";
import Home from "./HomeComponent/Home";
import About from "./AboutComponent/About";

function RoutesComponent() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  );
}

export default RoutesComponent;
