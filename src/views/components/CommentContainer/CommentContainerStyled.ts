import styled from "styled-components";

export const CommentContainerStyled = styled.div`
  display: flex;
  padding: 20px;
  border: 3px solid ${({ theme }) => theme.black_hover};
  margin: 30px 0;
  border-radius: 30px;

  .avatar {
    margin-right: 20px;
  }

  .avatar-container {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid ${({ theme }) => theme.black_hover};

    & img {
      width: 100%;
      height: 100%;
    }
  }

  .name-text {
    width: 100%;
  }

  .createdAt {
    color: ${({ theme }) => theme.yellow_beer};
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.white_heaven};
  }
`;
