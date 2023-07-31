// ICONS
import { IoCart } from 'react-icons/io5'
import { MdCoffee } from 'react-icons/md'
import { BsFillClockFill } from 'react-icons/bs'
import { RiInboxArchiveFill } from 'react-icons/ri'

// COMPONENTS
import { CoffeeCard } from '../../components/CoffeeCard/CoffeeCard'
import { AdvantageCard } from '../../components/AdvantageCard/AdvantageCard'

// MOCK
import coffees from '../../utils/coffeeMock'

// ASSETS
import homeImage from '../../assets/images/homeImage.png'

// STYLES
import * as S from './styles'

export function Home() {
  return (
    <S.HomeContainer>
      <S.HomeSection>
        <S.HomeInfo>
          <S.HeroContainer>
            <S.Title>
              Encontre o café perfeito para qualquer hora do dia
            </S.Title>
            <S.Subtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </S.Subtitle>
          </S.HeroContainer>
          <S.Advantages>
            <AdvantageCard
              icon={<IoCart color="#FFF" size={16} />}
              title="Compra simples e segura"
              color="yellow-dark"
            />
            <AdvantageCard
              icon={<RiInboxArchiveFill color="#FFF" size={16} />}
              title="Embalagem mantém o café intacto"
              color="base-text"
            />
            <AdvantageCard
              icon={<BsFillClockFill color="#FFF" size={16} />}
              title="Entrega rápida e rastreada"
              color="yellow"
            />
            <AdvantageCard
              icon={<MdCoffee color="#FFF" size={16} />}
              title="O café chega fresquinho até você"
              color="purple"
            />
          </S.Advantages>
        </S.HomeInfo>
        <S.Image src={homeImage} />
      </S.HomeSection>

      <S.CoffeesSection>
        <S.CoffeesSectionTitle>Nossos cafés</S.CoffeesSectionTitle>
        <S.CoffeesContainer>
          {coffees.map((coffee) => (
            <CoffeeCard coffee={coffee} key={coffee.id} />
          ))}
        </S.CoffeesContainer>
      </S.CoffeesSection>
    </S.HomeContainer>
  )
}
