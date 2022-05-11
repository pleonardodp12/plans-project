import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonWrapper } from './styles'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}


export const PrimaryButton = (props: IProps) => {
  const { children } = props
  return (
    <ButtonWrapper>
      {children}
    </ButtonWrapper>
  )
}