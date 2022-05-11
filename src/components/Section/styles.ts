import styled from 'styled-components';

interface ISectionContainer {
  color?: 'white' | 'white200';
}

export const SectionContainer = styled.section<ISectionContainer>`
  width: 100%;
  height: 100%;
  background: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 4rem 0;
`;

export const Title = styled.h2`
  margin: 2.4rem 0;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.gray200};
`;
