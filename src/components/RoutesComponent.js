import { Switch, Route } from "react-router-dom";
import Home from "../pages/HomeComponent/Home";
import About from "../pages/AboutComponent/About";
import Error from "../pages/ErrorComponent/Error";
import Logement from "../pages/LogementComponent/Logement";

function RoutesComponent() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/:id">
        <Logement />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
  );
}

export default RoutesComponent;
