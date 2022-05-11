import { ReactNode } from "react";
import { SectionContainer, Title } from "./styles"

interface IProps {
  title: string;
  children?: ReactNode;
}

export const Section = (props: IProps) => {
  const { children, title } = props
  return (
    <SectionContainer>
      <Title>{title}</Title>
      {children}
    </SectionContainer>
  )
}