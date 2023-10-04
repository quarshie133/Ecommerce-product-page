import React, { useState } from "react";
import { StyledBurger } from "./Burger.styled";
import RightNav from "../Sidebar/Sidebar";

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
