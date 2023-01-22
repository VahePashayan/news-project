import styled from "styled-components";

export const SmallCardStyled = styled.div`
  width: calc(50% - 40px);
  margin: 30px 20px;
  color: ${({ theme }) => theme.white_heaven};
  transition: color 300ms;
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.yellow_beer};
  }

  img {
    width: 100%;
    border-radius: 40px;
    overflow: hidden;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 12px;
    width: fit-content;
    text-align: left;
    :first-letter {
      text-transform: uppercase;
    }
  }

  h4 {
    font-size: 0.8rem;
    width: fit-content;
  }
`;
