import { AllHTMLAttributes, ReactNode } from "react";
import { SectionContainer, Title } from "./styles"

interface IProps extends AllHTMLAttributes<HTMLDivElement> {
  title: string;
  color?: 'white' | 'white200';
  children?: ReactNode;
}

export const Section = (props: IProps) => {
  const { children, title, color } = props
  return (
    <SectionContainer color={color}>
      <Title>{title}</Title>
      {children}
    </SectionContainer>
  )
}