import { useNavigate } from 'react-router-dom';
import NotFoundImage from '../../assets/not-found.svg';
import { PrimaryButton } from '../PrimaryButton';
import { NotFoundContainer } from './styles';

export function NotFound() {
  const navigate = useNavigate();
  const handleBackScreen = () => {
    navigate('/');
  };

  return (
    <NotFoundContainer>
      <img
        src={NotFoundImage}
        alt="Imagem que represeta uma página não encontrada"
      />
      <PrimaryButton onClick={handleBackScreen}>Voltar</PrimaryButton>
    </NotFoundContainer>
  );
}
