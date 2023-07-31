import { CoffeeAmount } from '../CoffeeAmount/CoffeeAmount'

import { IoMdCart } from 'react-icons/io'

// STYLES
import * as S from './Coffee.styles'

type Coffee = {
  title: string
  tags: string[]
  description: string
  srcImg: string
  price: string
}

interface CoffeeCardProps {
  coffee: Coffee
}

export const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
  const { title, tags, description, srcImg, price } = coffee
  return (
    <S.CoffeeCardContainer>
      <img src={srcImg} alt={`${title} - ${description}`} />
      <S.CoffeeTags>
        {tags.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </S.CoffeeTags>
      <S.CoffeeInfo>
        <h6>{title}</h6>
        <p>{description}</p>
      </S.CoffeeInfo>
      <S.CoffeeSale>
        <p>
          R$ <span>{price}</span>
        </p>
        <CoffeeAmount amount={0} />
        <button>
          <IoMdCart />
        </button>
      </S.CoffeeSale>
    </S.CoffeeCardContainer>
  )
}
