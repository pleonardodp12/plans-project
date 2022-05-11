import styled from 'styled-components';

export const WrapperLoading = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};

  .loader {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    border: 0.4rem solid ${({ theme }) => theme.colors.primary};
    border-top-color: ${({ theme }) => theme.colors.white200};
    box-sizing: border-box;
    background: transparent;
    animation: loading 1s linear infinite;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    0% {
      transform: rotate(360deg);
    }
  }
`;
