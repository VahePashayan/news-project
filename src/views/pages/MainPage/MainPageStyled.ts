import styled from "styled-components";

export const MainPageStyled = styled.div`
  padding: 0 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.white_heaven};
    font-size: 3rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  .cards-container {
    width: 1000px;
  }

  .smallCards-container {
    width: 100%;
    margin-top: 30px;
    flex-wrap: wrap;
  }
`;
