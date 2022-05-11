import { IPlatform, PlatformCard } from './PlatformCard';
import { PlatformCardsContainer } from './styles';

interface IProps {
  platforms: IPlatform[];
}

export function PlatformCards(props: IProps) {
  const { platforms } = props;
  return (
    <PlatformCardsContainer>
      {platforms.map((platform) => (
        <PlatformCard key={platform.sku} platform={platform} />
      ))}
    </PlatformCardsContainer>
  );
}
