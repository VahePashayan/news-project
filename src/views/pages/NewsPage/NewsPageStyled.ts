import styled from "styled-components";

export const NewsPageStyled = styled.div`
  padding: 30px 100px;

  .card-info {
    margin-bottom: 50px;
  }

  .image-container {
    margin-right: 50px;
    overflow: hidden;
    border-radius: 30px;
  }

  .info-container {
    color: ${({ theme }) => theme.white_heaven};
    text-align: left;
  }

  h2 {
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .author {
    font-size: 1.5rem;
    margin-bottom: 6px;

    .bold {
      font-weight: 700;
      color: ${({ theme }) => theme.yellow_beer};
      margin-right: 8px;
    }
  }

  .views {
    font-size: 1.2rem;
    margin-bottom: 6px;

    .bold {
      font-weight: 700;
      color: ${({ theme }) => theme.yellow_beer};
      margin-right: 8px;
    }
  }

  h4 {
    font-size: 1.2rem;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.yellow_beer};
  }

  .card-comments {
    text-align: left;

    h2 {
      color: ${({ theme }) => theme.white_heaven};
    }
  }
`;
