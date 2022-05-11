import styled from 'styled-components';

export const PlatformCardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
