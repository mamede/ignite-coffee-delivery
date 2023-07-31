// ASSETS
import { MdLocationPin } from 'react-icons/md'
import { IoIosCart } from 'react-icons/io'
import Logo from '../../assets/icons/logo.svg'

// STYLE
import * as S from './Header.styles'

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.LogoAnchor href="/">
        <S.Logo src={Logo} alt="Logo - ignite Coffee Delivery" />
      </S.LogoAnchor>
      <S.ActionsContainer>
        <S.LocationContainer>
          <MdLocationPin color="#8047F8" size={22} />
          <S.CityName>Gama, DF</S.CityName>
        </S.LocationContainer>
        <S.CartAnchor href="/">
          <IoIosCart color="#C47F17" size={22} />
        </S.CartAnchor>
      </S.ActionsContainer>
    </S.HeaderContainer>
  )
}
