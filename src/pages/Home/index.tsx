import { useEffect, useState } from 'react';
import { Header, Hero, Section, PlatformCards, Footer } from '../../components';
import ConnectedWorld from '../../assets/connected-world.svg';
import api from '../../services/api';
import { ContentSection } from './styles';

export function Home() {
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    const getPlatforms = async () => {
      const { data } = await api.get('/plataformas');
      return setPlatforms(data.plataformas);
    };

    getPlatforms();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Section id="platform-select" title="Qual sua plataforma?">
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
