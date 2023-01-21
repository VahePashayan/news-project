import styled from "styled-components";

export const MainPageStyled = styled.div`
  padding: 0 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: ${({ theme }) => theme.white_heaven};
    font-size: 3rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  .cards-container {
    padding: 20px 250px;
  }
`;
