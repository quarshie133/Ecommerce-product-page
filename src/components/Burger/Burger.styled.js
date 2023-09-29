import { styled } from "styled-components";

export const StyledBurger = styled.button`
  position: absolute;
  top: 3.9%;
  left: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;

  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #000;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  @media screen and (min-width: 1024px) {
   display: none;
    
  }
`;
