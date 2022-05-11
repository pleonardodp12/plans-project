import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 16rem;
  height: 20rem;
  padding: 0.4rem;
  background-color: ${({ theme }) => theme.colors.white200};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const Title = styled.h3`

`

export const Description = styled.p`
  text-align: center;
  color:  ${({ theme }) => theme.colors.gray};
`
