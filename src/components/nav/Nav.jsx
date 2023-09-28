import React from "react";
import {
  NavWrapper,
  Logo,
  NavList,
  NavItem,
  CartWrapper,
  NavLink,
} from "./Nav.styled";
import Profile from "../../assets/image-avatar 1.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Nav() {
  return (
    <NavWrapper>
      <Logo href="">sneakers</Logo>
      <NavList className="nav-border">
        <li>
          <NavItem href="">Collections</NavItem>
        </li>
        <li>
          <NavItem href="">Men</NavItem>
        </li>
        <li>
          <NavItem href="">Woman</NavItem>
        </li>
        <li>
          <NavItem href="">About</NavItem>
        </li>
        <li>
          <NavItem href="">Contact</NavItem>
        </li>
      </NavList>
      <CartWrapper>
        <ShoppingCartOutlinedIcon />
        <img src={Profile} alt="" />
      </CartWrapper>
    </NavWrapper>
  );
}

export default Nav;
