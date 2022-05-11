import Logo from '../../assets/logo.svg'
import { HeaderContainer } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo Plans Allied" />
    </HeaderContainer>
  )
}