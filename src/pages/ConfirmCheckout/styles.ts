import styled from 'styled-components';

export const ContainerCheckout = styled.div`
  width: 60%;
  max-width: 860px;
  height: 100%;
  padding: 2.4rem 0;
  margin: 0 auto;
  position: relative;
  background: ${({ theme }) => theme.colors.white200};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;

  @media (max-width: 960px) {
    width: 100%;
    flex-direction: column;
    border-radius: 0;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  padding: 2.4rem;
  height: 100%;
  display: flex;
  flex-direction: column;

  > button {
    margin-top: 2.8rem;
    align-self: center;
  }
`;

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 8px 0 16px 0;
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.gray200};
`;

export const Info = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
`;
