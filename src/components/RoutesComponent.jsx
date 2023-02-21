import { Switch, Route } from "react-router-dom";
import Home from "../pages/HomeComponent/Home.jsx";
import About from "../pages/AboutComponent/About.jsx";
import Error from "../pages/ErrorComponent/Error.jsx";
import Logement from "../pages/LogementComponent/Logement.jsx";

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
