import { useEffect, useState } from 'react';
import { getPlatforms } from '../../services/api';
import ConnectedWorld from '../../assets/connected-world.svg';
import { Hero, Section, PlatformCards, Footer } from '../../components';
import { ContentSection } from './styles';
import { IPlatform } from '../../components/PlatformCards/PlatformCard';

export function Home() {
  const [platforms, setPlatforms] = useState<IPlatform[]>([]);

  const fetchPlatforms = async () => {
    const response: any = await getPlatforms();
    return setPlatforms(response.plataformas);
  };

  useEffect(() => {
    fetchPlatforms();
  }, []);

  return (
    <>
      <Hero />
      <Section id="platform-select" title="Qual sua plataforma?" color="white">
        <PlatformCards platforms={platforms} />
      </Section>

      <Section title="Como Funciona" color="white200">
        <ContentSection>
          <span>
            Selecione sua plataforma, escolha um plano, faça seu cadastro e
            pronto!
          </span>
          <img
            src={ConnectedWorld}
            alt="Imagem mundo conectado com a internet"
          />
        </ContentSection>
      </Section>

      <Footer />
    </>
  );
}
