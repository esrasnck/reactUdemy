import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import CategoryList from "../categories/CategoryList"
import ProductList from "../products/ProductList"

export default class DashBoard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="3">
              <CategoryList></CategoryList>
          </Col>

          <Col xs="9">
              <ProductList></ProductList>
          </Col>
        </Row>
      </div>
    );
  }
}
