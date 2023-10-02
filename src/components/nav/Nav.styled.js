import { styled } from "styled-components";

export const NavWrapper = styled.nav`
  /* width: 100%; */
  background-color: var(--white_background);
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 2rem;
  border-bottom: 1px solid #ccc;

  @media screen and (max-width: 768px) {
    /* width: 380px; */
    height: 70px;
    /* display: inline-block; */
    width: 100%;
    /* margin: 0 10% 0 10%; */
    /* padding: 0 20px; */
    
  }
`;

export const Logo = styled.a`
  font-family: "Outfit", sans-serif;
  font-size: 1.9rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-decoration: none;
  color: var(--black-color);
  margin-left: 10.31rem;


  @media screen and (max-width: 768px) {
    margin-left: 2.85rem;
    
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
`;

export const NavItem = styled.a`
  font-family: "Kumbh Sans", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;

  color: var(--gray_color);

  text-decoration: none;
  position: relative;

  &:hover {
    /* Set the link color on hover */
    color: var(--very-dark-blue);
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    bottom: -3.8rem;
    left: 0;
    padding: 2px;
    margin-bottom: 1.5rem;
    background-color: var(--orange-color);
    transform: scaleX(0); /* Start with no underline width */
    transform-origin: 10% 40%;
  }

  &:hover:before {
    transform: scaleX(1); /* Expand the underline on hover */
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin-left: auto;
  margin-right: 7rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    margin-left: -6.68rem;
  }
`;
