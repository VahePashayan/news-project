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
    width: 640px;
    height: 480px;
    background-color: ${({theme}) => theme.black_hover};
  }

  .info-container {
    color: ${({ theme }) => theme.white_heaven};
    text-align: left;
    max-width: 800px;
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

  @keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-o-keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-moz-keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-webkit-keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .animate-flicker {
    -webkit-animation: flickerAnimation 0.5s infinite;
    -moz-animation: flickerAnimation 0.5s infinite;
    -o-animation: flickerAnimation 0.5s infinite;
    animation: flickerAnimation 0.5s infinite;
  }
`;
