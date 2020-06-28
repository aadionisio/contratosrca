import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Rca from "./pages/Rca";
import ContractPj from "./reports/Contract_pj";
import FriendlyTermination from "./reports/Friendly_termination";
// import Repository from './pages/Repository';

export default function Routes() {
  return (
    // componente switch define que apenas uma pagina será exibida por vez.
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/rca" component={Rca} />
        <Route path="/contractpj/rep" component={ContractPj} />
        <Route path="/ftpj/rep" component={FriendlyTermination} />
        {/* <Route path="/repository/:repository" component={Repository} /> */}
      </Switch>
    </BrowserRouter>
  );
}
