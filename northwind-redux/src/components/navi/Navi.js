import React, { Component } from 'react'
import CartSummary from '../cart/CartSummary';

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
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler />
                <Collapse navbar>
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                      <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                    </NavItem>
                    <CartSummary></CartSummary>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          );
        }
    }

