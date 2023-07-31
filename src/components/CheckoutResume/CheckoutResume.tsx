import { useCart } from '../../hooks/useCart'
import { formatPrice } from '../../utils/formatPrice'
import * as S from './CheckoutResume.styles'

export function CheckoutResume() {
  const { cartItems, cartProductsTotalPrice } = useCart()
  const shippingTaxes = cartItems.length > 0 ? 1.9 : 0
  const cartItemsTotalPrice = cartProductsTotalPrice + shippingTaxes

  return (
    <>
      <S.CheckoutResumeRow>
        <S.CheckoutResumeText size="0.875">Total de itens</S.CheckoutResumeText>
        <S.CheckoutResumeText size="1">
          R$ {formatPrice(cartProductsTotalPrice)}
        </S.CheckoutResumeText>
      </S.CheckoutResumeRow>
      <S.CheckoutResumeRow>
        <S.CheckoutResumeText size="0.875">Entrega</S.CheckoutResumeText>
        <S.CheckoutResumeText size="1">
          R$ {formatPrice(shippingTaxes)}
        </S.CheckoutResumeText>
      </S.CheckoutResumeRow>
      <S.CheckoutResumeRow>
        <S.CheckoutResumeText size="1.25" bold colorDarker>
          Total
        </S.CheckoutResumeText>
        <S.CheckoutResumeText size="1.25" bold colorDarker>
          R$ {formatPrice(cartItemsTotalPrice)}
        </S.CheckoutResumeText>
      </S.CheckoutResumeRow>
    </>
  )
}
