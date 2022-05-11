import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 60%;
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

  fieldset {
    min-inline-size: auto;
    border: 0;
    width: 100%;
    padding: 3rem;
    margin: 3rem auto 0 auto;

    @media (max-width: 560px) {
      padding: 1rem;
    }
  }

  legend {
    width: 100%;
    display: flex;
    align-self: flex-start;
    font-size: 1.4rem;
    font-weight: bold;
  }
`;

export const GroupInputs = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 0 2rem;

  @media (max-width: 590px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BackButton = styled.button`
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

export const GroupPlans = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  gap: 0.4rem;

  li {
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.grayLight};
    height: 9rem;
    border-radius: 8px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    cursor: pointer;

    @media (max-width: 560px) {
      height: 12rem;
    }

    &.selected {
      background: ${({ theme }) => theme.colors.white200};
      border: 2px solid ${({ theme }) => theme.colors.primary};
    }
    span {
      flex: 1;
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Value = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
`;
