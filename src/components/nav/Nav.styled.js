import { styled } from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 6.5rem;
  background: var(--white_background);
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 70px;
    width: 100%;
  }
`;

export const Logo = styled.a`
  font-family: "Outfit", sans-serif;
  font-size: 1.9rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-decoration: none;
  color: var(--black-color);
  margin-left: 5.31rem;

  @media screen and (max-width: 768px) {
    display: none;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 1.5rem;
    letter-spacing: 0.1px;
    margin-left: 4.35rem;
  }
`;

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-left: auto;
  margin-right: 3rem;
  cursor: pointer;
`;
