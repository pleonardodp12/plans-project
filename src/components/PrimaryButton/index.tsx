import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonWrapper } from './styles';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
}

export function PrimaryButton(props: IProps) {
  const { children, onClick } = props;
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
}

PrimaryButton.defaultProps = {
  onClick: null,
};
