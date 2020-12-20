import React from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

//Paginas de rotas
import Principal from "./components/pages/Principal/index";
import PageNotFound from "./components/pages/Paginanoencontrada/index";
import Servicio from "./components/pages/Servicio";

function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Principal} />
        <Route path="/principal" component={Principal} />
        <Route path="/servicios" component={Servicio} />
        <Route component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
  );
}
export default routes;