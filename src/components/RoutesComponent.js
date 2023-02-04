import { Switch, Route } from "react-router-dom";
import Home from "./HomeComponent/Home";
import About from "./AboutComponent/About";
import Error from "./ErrorComponent";

function RoutesComponent() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
  );
}

export default RoutesComponent;
