import { useState } from 'react'

// ICONS
import { AiOutlineShoppingCart } from 'react-icons/ai'

// HOOKS
import { useCart } from '../../hooks/useCart'

// UTILS
import { formatPrice } from '../../utils/formatPrice'

// STYLES
import * as S from './Coffee.styles'

export interface ProductProps {
  id: number
  name: string
  description: string
  price: string
  image: string
  tags: string[]
  quantity?: number
}

export interface CoffeeProps {
  coffee: ProductProps
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)
  const { addProductCart } = useCart()

  function handleIncreaseQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecreaseQuantity() {
    setQuantity((state) => state - 1)
  }

  function handleAddToCart() {
    const productToAdd = {
      ...coffee,
      quantity,
    }

    addProductCart(productToAdd)
  }

  return (
    <S.CoffeeCardContainer key={coffee.id}>
      <img src={coffee.image} alt="" width="120" height="120" />

      <S.Tags>
        {coffee.tags.map((tag) => {
          return <S.Tag key={`${coffee.id}-${tag}`}>{tag}</S.Tag>
        })}
      </S.Tags>

      <S.CoffeeType>{coffee.name}</S.CoffeeType>

      <S.CoffeeDescription>{coffee.description}</S.CoffeeDescription>

      <S.BuyContainer>
        <S.Price>
          R$<span>{formatPrice(Number(coffee.price))}</span>
        </S.Price>

        <S.BuyActionWrapper>
          <S.ProductAmountWrapper>
            <S.ProductMinusAmountButton
              disabled={quantity <= 1}
              onClick={handleDecreaseQuantity}
            >
              <S.StyledMinus weight="bold" />
            </S.ProductMinusAmountButton>

            <S.ProductAmountInput
              min="1"
              max="10"
              id={coffee.id.toString()}
              name={coffee.id.toString()}
              value={quantity}
              readOnly
            />

            <S.ProductPlusAmountButton onClick={handleIncreaseQuantity}>
              <S.StyledPlus weight="bold" />
            </S.ProductPlusAmountButton>
          </S.ProductAmountWrapper>

          <S.AddCartBtn onClick={handleAddToCart}>
            <AiOutlineShoppingCart size={22} color="white" weight="fill" />
          </S.AddCartBtn>
        </S.BuyActionWrapper>
      </S.BuyContainer>
    </S.CoffeeCardContainer>
  )
}
