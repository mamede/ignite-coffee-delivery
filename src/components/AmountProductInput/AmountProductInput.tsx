// ICONS
import { AiOutlineMinus as Minus, AiOutlinePlus as Plus } from 'react-icons/ai'

// HOOKS
import { useCart } from '../../hooks/useCart'

// STYLES
import * as S from './AmountProductInput.styles'

// TYPES
import { CoffeeProps } from '../CoffeeCard/CoffeeCard'

export function AmountProductInput({ coffee }: CoffeeProps) {
  const { increaseQuantityProductCart, decreaseQuantityProductCart } = useCart()

  return (
    <S.BuyActionWrapper>
      <S.ProductAmountWrapper>
        <S.ProductMinusAmountButton
          disabled={coffee.quantity === 1}
          onClick={() => decreaseQuantityProductCart(coffee)}
        >
          <Minus weight="bold" />
        </S.ProductMinusAmountButton>

        <S.ProductAmountInput
          min="1"
          max="10"
          value={coffee.quantity}
          readOnly
        />

        <S.ProductPlusAmountButton
          onClick={() => increaseQuantityProductCart(coffee)}
        >
          <Plus weight="bold" />
        </S.ProductPlusAmountButton>
      </S.ProductAmountWrapper>
    </S.BuyActionWrapper>
  )
}
