import { NavLink } from 'react-router-dom'

// ASSETS
import { MdLocationPin } from 'react-icons/md'
import { IoIosCart } from 'react-icons/io'
import Logo from '../../assets/icons/logo.svg'

// HOOKS
import { useCart } from '../../hooks/useCart'

// STYLE
import * as S from './Header.styles'

export const Header = () => {
  const { cartLength } = useCart()

  return (
    <S.HeaderContainer>
      <NavLink to="/">
        <S.Logo src={Logo} alt="Logo - ignite Coffee Delivery" />
      </NavLink>
      <S.ActionsContainer>
        <S.LocationContainer>
          <MdLocationPin color="#8047F8" size={22} />
          <S.CityName>Gama, DF</S.CityName>
        </S.LocationContainer>
        <NavLink to="/checkout">
          <S.CartAnchor>
            <IoIosCart color="#C47F17" size={22} />
            {cartLength > 0 && <S.CartLength>{cartLength}</S.CartLength>}
          </S.CartAnchor>
        </NavLink>
      </S.ActionsContainer>
    </S.HeaderContainer>
  )
}
