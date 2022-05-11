import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  width: 14rem;
  height: 50px;
  border-radius: 50px;
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  transition: all ease 0.3s;
  cursor: pointer;
  box-shadow: 1px 3px 4px rgba(19, 125, 224, 0.5);

  &:hover {
    filter: brightness(0.9);
    box-shadow: 1px 2px 2px rgba(19, 125, 224, 0.5);
  }
`;
