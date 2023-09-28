import React from "react";
import { NavWrapper, Logo, NavList, NavItem, CartWrapper } from "./Nav.styled";
import Profile from "../../assets/image-avatar 1.png";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Nav() {
  return (
  <NavWrapper>
    <Logo href="">sneakers</Logo>
    <NavList>
      <NavItem href=""><li>Collections</li></NavItem>
      <NavItem href=""><li>Men</li></NavItem>
      <NavItem href=""><li>Woman</li></NavItem>
      <NavItem href=""><li>About</li></NavItem>
      <NavItem href=""><li>Contact</li></NavItem>
    </NavList>
    <CartWrapper>
     <ShoppingCartOutlinedIcon />
      <img src={Profile} alt="" />
    </CartWrapper>
  </NavWrapper>
  );
}

export default Nav;
