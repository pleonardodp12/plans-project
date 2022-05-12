import styled from 'styled-components';

export const BackButtonWrapper = styled.button`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  cursor: pointer;
`;
