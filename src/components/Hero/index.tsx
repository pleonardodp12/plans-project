import HeroImage from '../../assets/online-connection.svg';
import { PrimaryButton } from '../PrimaryButton';
import { HeroContainer, TextContainer, ImageContainer, Text } from './styles';

export function Hero() {
  const goToPlans = () => {
    window.scrollTo({ top: -300, left: 0, behavior: 'smooth' });
  };

  return (
    <HeroContainer>
      <TextContainer>
        <Text>Encontre o plano perfeito para você!</Text>
        <PrimaryButton onClick={goToPlans}>Buscar planos</PrimaryButton>
      </TextContainer>

      <ImageContainer>
        <img src={HeroImage} alt="Homem fazendo conexão com a internet" />
      </ImageContainer>
    </HeroContainer>
  );
}
