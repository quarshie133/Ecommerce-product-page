import React from "react";
import { StyledNav, Logo } from "../nav/Nav.styled";
import Profile from "../../assets/image-avatar 1.png";

function Nav() {
  return (
    <StyledNav>
      <Logo href="#">sneakers</Logo>
      <li>Collections</li>
      <li>Men</li>
      <li>Women</li>
      <li>About</li>
      <li>Contact</li>
      <div className="icon-img">
        <img src={Profile} alt="" />
      </div>
    </StyledNav>
  );
}

export default Nav;
