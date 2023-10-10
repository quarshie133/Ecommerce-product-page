import { styled } from "styled-components";

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--white-color);
    /* background: rgba(0, 0, 0, 0.7); */
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    top: -1rem;
    left: 0;
    /* height: 100vh;
    width: 300px; */
    width: 250px;
    height: 900px;
    font-weight: 400;
    padding-top: 2.5rem;
    transition: transform 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    li {
      color: var(--black-color);
    }

    a {
      color: var(--black-color);
    }

    &:hover {
      color: #fff;
    }
  }
`;

export const NavLink = styled.a`
  font-family: "Kumbh Sans", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--gray_color);
  text-decoration: none;

  &:hover {
    color: var(--very-dark-blue);
  }

  &::before {
    content: "";
    display: block;
    position: relative;
    width: 100%;
    bottom: -3.7rem;
    left: 0;
    padding: 2px;
    background-color: var(--orange-color);
    transform: scaleX(0);
    transform-origin: 10% 40%;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    &::before {
      display: none;
    }

    &:hover::before {
      display: none;
    }
  }
`;
