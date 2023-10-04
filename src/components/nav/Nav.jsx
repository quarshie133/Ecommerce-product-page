import React from "react";
import { Nav, Logo } from "./Nav.styled";
import Burger from "../Burger/Burger";

const Navbar = () => {
  return (
    <Nav>
      <Logo href="">
        Sneakers
      </Logo>
      <Burger />
    </Nav>
  );
};

export default Navbar;
