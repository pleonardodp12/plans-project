import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  height: 50vh;
  background: ${({ theme }) => theme.colors.white200};
  display: flex;

  @media (max-width: 590px) {
    flex-direction: column;
    height: 90vh
  }
`


export const TextContainer = styled.div`
  width: 50%;
  display: flex;
  padding: 4rem;
  justify-content: center;
  flex-direction: column;
  gap: 1.4rem;

  @media (max-width: 590px) {
    width: 100%;
    padding: 2rem;
    height: 40vh;
  }
`

export const Text = styled.h1`
  color: ${({ theme }) => theme.colors.gray200};
  word-wrap: break-word;
  width: 100%;
  max-width: 28rem;

  @media (max-width: 590px) {
    width: 80%;
  }
`
export const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 80%;
  }

  @media (max-width: 590px) {
    width: 100%;
    height: 40vh;
    img {
      height: 70%;
    }
  }
`