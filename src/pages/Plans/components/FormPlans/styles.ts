import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 80%;
  padding-top: 2.4rem;
  margin: 0 auto;
  position: relative;
  background: ${({ theme }) => theme.colors.white200};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;

  @media (max-width: 590px) {
    width: 100%;
    flex-direction: column;
    border-radius: 0;
  }

  fieldset {
    min-inline-size: auto;
    border: 0;
    width: 100%;
    padding: 2rem;
    margin: 3rem auto 0 auto;
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
  gap: 1rem;

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
