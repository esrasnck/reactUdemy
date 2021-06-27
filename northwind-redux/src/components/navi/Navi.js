import React, { Component } from 'react'
import CartSummary from '../cart/CartSummary';
import { Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';


export default class Navi extends Component {
   
    render() {
        return (
            <div>
              <Navbar color="light" light expand="md">
                <NavbarBrand><Link to="/">Northwind Mağazası</Link></NavbarBrand>
                <NavbarToggler />
                <Collapse navbar>
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                      <NavLink><Link to="/saveproduct">Ürün Ekle</Link></NavLink>
                    </NavItem>
                    <CartSummary></CartSummary>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          );
        }
    }

