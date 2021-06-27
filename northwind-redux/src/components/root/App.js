import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import DashBoard from "./DashBoard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container>
      <Navi></Navi>
      <Switch>
        <Route path="/" exact component={DashBoard} />
        <Route path="/product" exact component={DashBoard} />
        <Route path="/cart" exact component={CartDetail} />
        <Route path="/saveproduct" exact component={AddOrUpdateProduct} />
        <Route path="/saveproduct/:productId" exact component={AddOrUpdateProduct} />
        <Route exact component={NotFound} />
      </Switch>
    </Container>
  );
}

export default App;
