import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  margin: 1.4rem 0;
`

export const Title = styled.h2`
  margin: 2.4rem 0;
  color: ${({ theme }) => theme.colors.gray200};
  align-self: center;
`