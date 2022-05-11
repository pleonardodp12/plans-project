import styled from "styled-components";

export const ButtonWrapper = styled.button`
  width: 14rem;
  height: 50px;
  border-radius: 50px;
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  transition: filter ease .3s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`