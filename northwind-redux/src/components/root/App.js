import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import DashBoard from "./DashBoard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <Container>
      <Navi></Navi>
      <Switch>
        <Route path="/" exact component={DashBoard} />
        <Route path="/product" exact component={DashBoard} />
        <Route path="/cart" exact component={CartDetail} />
      </Switch>
    </Container>
  );
}

export default App;
