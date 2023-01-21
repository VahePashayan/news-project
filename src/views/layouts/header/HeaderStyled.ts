import styled from "styled-components";

export const HeaderStyled = styled.div`
  padding: 20px 40px;
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.white_heaven};
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid ${({ theme }) => theme.yellow_beer};

  h1 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.black_russian};
    transition: color 300ms;

    &:after {
      display: block;
      content: "";
      border-bottom: solid 3px ${({ theme }) => theme.yellow_beer};
      transform: scaleX(0);
      transition: transform 300ms;
    }

    &:hover:after {
      transform: scaleX(1);
    }
  }
`;
