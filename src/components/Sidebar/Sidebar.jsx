import React from "react";
import { Ul, NavLink } from "./Sidebar.styled";

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <NavLink href="">Collections</NavLink>
      </li>
      <li>
        <NavLink href="">Men</NavLink>
      </li>
      <li>
        <NavLink href="">Women</NavLink>
      </li>
      <li>
        <NavLink href="">About</NavLink>
      </li>
      <li>
        <NavLink href="">Conatct</NavLink>
      </li>
    </Ul>
  );
};

export default RightNav;
