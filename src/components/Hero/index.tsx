import HeroImage from '../../assets/online-connection.svg'
import { PrimaryButton } from '../PrimaryButton'
import { HeroContainer, TextContainer, ImageContainer, Text } from './styles'

export const Hero = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <Text>
          Encontre o plano perfeito para você!
        </Text>
        <PrimaryButton>Buscar planos</PrimaryButton>
      </TextContainer>

      <ImageContainer>
        <img src={HeroImage} alt="Homem fazendo conexão com a internet" />
      </ImageContainer>
    </HeroContainer>
  )
}