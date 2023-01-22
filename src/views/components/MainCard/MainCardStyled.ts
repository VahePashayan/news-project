import styled from "styled-components";

export const MainCardStyled = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  transition: opacity 300ms;
  cursor: pointer;
  border-radius: 40px;
  overflow: hidden;

  &:hover {
    opacity: 0.7;
  }

  img {
    width: 100%;
  }

  .card-description {
    color: ${({ theme }) => theme.white_heaven};
    width: 40%;
    padding: 30px;
    align-items: flex-start;
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    border-top: 2px solid ${({ theme }) => theme.yellow_beer};
  }

  h3 {
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.yellow_beer};
    margin-bottom: 16px;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 500px;
  }

  h4 {
    font-size: 0.8rem;
    margin-bottom: 16px;
  }

  a {
    width: 100%;
  }
`;
