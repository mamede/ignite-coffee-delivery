// ICONS
import { BiTrash as Trash } from 'react-icons/bi'

// COMPONENTS
import { AmountProductInput } from '../../components/AmountProductInput/AmountProductInput'

// HOOKS
import { useCart } from '../../hooks/useCart'

// UTILS
import { formatPrice } from '../../utils/formatPrice'

// STYLES
import * as S from './CheckoutProductItem.styles'

// TYPES
import { CoffeeProps } from '../CoffeeCard/CoffeeCard'

export function CheckoutProductItem({ coffee }: CoffeeProps) {
  const { removeProductCart } = useCart()
  const CoffeeItemTotalValue = Number(coffee.price) * coffee.quantity!

  return (
    <>
      <S.CheckoutItem>
        <img src={coffee.image} alt="" width="64" height="64" />
        <S.CheckoutItemTitleAmountWrapper>
          <S.CheckoutItemTitle>{coffee.name}</S.CheckoutItemTitle>
          <S.CheckoutItemButtons>
            <AmountProductInput coffee={coffee} />
            <S.CheckoutRemoveItemButton
              onClick={() => removeProductCart(coffee)}
            >
              <Trash size={16} color="#8047F8" />
              Remover
            </S.CheckoutRemoveItemButton>
          </S.CheckoutItemButtons>
        </S.CheckoutItemTitleAmountWrapper>
        <S.CheckoutItemPrice>
          R$ {formatPrice(CoffeeItemTotalValue)}
        </S.CheckoutItemPrice>
      </S.CheckoutItem>
      <S.CheckoutItemSeparator />
    </>
  )
}
