import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { BsCurrencyDollar } from 'react-icons/bs'
import { MdLocationPin as MapPin } from 'react-icons/md'
import { LuTimer as Timer } from 'react-icons/lu'

import { OrderData } from '../Checkout'
import { paymentMethodsList } from '../../components/PaymentMethods/PaymentMethods'

// STYLES
import * as S from './styles'
import checkoutDone from '../../assets/images/checkoutDone.svg'

interface LocationType {
  state: OrderData
}

export function CheckoutDone() {
  const { state } = useLocation() as unknown as LocationType
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) return <></>

  return (
    <S.CheckoutDoneContainer>
      <S.CheckoutTitle>Uhu! Pedido confirmado</S.CheckoutTitle>

      <S.CheckoutSubtitle>
        Agora é só aguardar que logo o chegará até você
      </S.CheckoutSubtitle>

      <S.CheckoutDoneMain>
        <S.CheckoutOrderInfoWrapper>
          <S.CheckoutOrderInfoTypeWrapper>
            <S.CheckoutOrderIconWrapper color="#8047F8">
              <MapPin size={16} color="white" weight="fill" />
            </S.CheckoutOrderIconWrapper>
            <S.CheckoutOrderSpanWrapper>
              <S.CheckoutOrderSpan>
                Entrega em{' '}
                <strong>
                  {state.adress}, {state.number}
                </strong>
              </S.CheckoutOrderSpan>

              {state.adressComplement && (
                <S.CheckoutOrderSpan>
                  {state.adressComplement}
                </S.CheckoutOrderSpan>
              )}

              <S.CheckoutOrderSpan>
                {state.district} - {state.city} - {state.uf}
              </S.CheckoutOrderSpan>
            </S.CheckoutOrderSpanWrapper>
          </S.CheckoutOrderInfoTypeWrapper>

          <S.CheckoutOrderInfoTypeWrapper>
            <S.CheckoutOrderIconWrapper color="#DBAC2C">
              <Timer size={16} color="white" weight="fill" />
            </S.CheckoutOrderIconWrapper>

            <S.CheckoutOrderSpanWrapper>
              <S.CheckoutOrderSpan>Previsão de entrega</S.CheckoutOrderSpan>
              <S.CheckoutOrderSpan bold>20 min - 30 min</S.CheckoutOrderSpan>
            </S.CheckoutOrderSpanWrapper>
          </S.CheckoutOrderInfoTypeWrapper>

          <S.CheckoutOrderInfoTypeWrapper>
            <S.CheckoutOrderIconWrapper color="#C47F17">
              <BsCurrencyDollar size={16} color="white" weight="fill" />
            </S.CheckoutOrderIconWrapper>

            <S.CheckoutOrderSpanWrapper>
              <S.CheckoutOrderSpan>Pagamento na entrega</S.CheckoutOrderSpan>

              <S.CheckoutOrderSpan bold>
                {paymentMethodsList[state.paymentMethod].label}
              </S.CheckoutOrderSpan>
            </S.CheckoutOrderSpanWrapper>
          </S.CheckoutOrderInfoTypeWrapper>
        </S.CheckoutOrderInfoWrapper>

        <img src={checkoutDone} alt="Checkout Done Image" />
      </S.CheckoutDoneMain>
    </S.CheckoutDoneContainer>
  )
}
