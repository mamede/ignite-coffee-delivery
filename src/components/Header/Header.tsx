// ASSETS
import { GrLocation } from 'react-icons/gr'
import { IoIosCart } from 'react-icons/io'
import logo from '../../assets/images/logo.png'

// STYLE
import * as S from './Header.styles'

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.LogoAnchor href="/">
        <S.Logo src={logo} alt="Logo - ignite Coffee Delivery" />
      </S.LogoAnchor>
      <S.ActionsContainer>
        <S.LocationContainer>
          <GrLocation />
          <S.CityName>Gama, DF</S.CityName>
        </S.LocationContainer>
        <S.CartAnchor href="/">
          <IoIosCart />
        </S.CartAnchor>
      </S.ActionsContainer>
    </S.HeaderContainer>
  )
}
