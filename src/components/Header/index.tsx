import Logo from '../../assets/logo.svg';
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo Plans Allied" />
    </HeaderContainer>
  );
}
