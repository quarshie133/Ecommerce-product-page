import { styled } from "styled-components";

export const NavWrapper = styled.nav`
  background-color: var(--white_background);
  padding: 20px;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  gap: 2rem;
  /* border-bottom: 1px solid #ccc; */
  /* width: 1141px; */
/* height: 1px; */
/* flex-shrink: 0; */
`;

export const Logo = styled.a`
  font-family: "Outfit", sans-serif;
  font-size: 1.9rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-decoration: none;
  color: var(--black-color);
  margin-left: 10.31rem;
  
  &:hover{
    color: var(--Light-grayish-blue);
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
`;

export const NavItem = styled.a`
  font-family: "Kumbh Sans", sans-serif;
  text-decoration: none;
  color: var(--gray_color);
`;

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin-left: auto;
  margin-right: 7rem;
  cursor: pointer;
`;
