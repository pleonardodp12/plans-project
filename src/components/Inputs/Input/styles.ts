import styled from 'styled-components';

interface IInputProps {
  isInvalid: boolean;
}

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 282px;
  margin-bottom: 1rem;
`;

export const Label = styled.label<IInputProps>`
  font-size: 1rem;
  margin-bottom: 8px;
  color: ${({ isInvalid, theme }) =>
    isInvalid ? 'red' : `${theme.colors.gray}`};
`;

export const InputBase = styled.input<IInputProps>`
  padding: 1rem 1rem;
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.colors.gray};
  border: ${({ isInvalid, theme }) =>
    isInvalid ? '1px solid red' : `1px solid ${theme.colors.gray}`};
  transition: border 0.3s;
  font-size: 0.8rem;
`;
