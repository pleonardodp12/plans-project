import styled from "styled-components";

export const ContentSection = styled.section`
  width: 100%;
  padding: 0 4rem;
  display: flex;
  align-items: center;

  img {
    max-width: 400px;
    margin-left: auto;
    filter: drop-shadow(1px 2px 4px rgba(0, 0, 0, 0.2));
  }

  span {
    font-size: 1.4rem;
    width: 100%;
    max-width: 50%;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    padding: 0 1.2rem;

    img {
      margin: auto;
    }
  }
`