import { useFormContext } from 'react-hook-form'

// ICONS
import {
  PiBankThin as Bank,
  PiCreditCardThin as CreditCard,
  PiMoneyThin as Money,
} from 'react-icons/pi'

// COMPONENTS
import { PaymentMethodInput } from '../PaymentMethodInput/PaymentMethodInput'

// STYLES
import * as S from './PaymentMethods.styles'

export const paymentMethodsList = {
  credit: {
    label: 'Cartão de Crédito',
    icon: <CreditCard size={16} color="#8047F8" />,
  },
  debit: {
    label: 'Cartão de Débito',
    icon: <Bank size={16} color="#8047F8" />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} color="#8047F8" />,
  },
}

export function PaymentMethods() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

  return (
    <>
      <S.PaymentMethodContentWrapper>
        {Object.entries(paymentMethodsList).map(([key, { label, icon }]) => (
          <PaymentMethodInput
            key={key}
            id={key}
            label={label}
            icon={icon}
            value={key}
            {...register('paymentMethod')}
          />
        ))}
      </S.PaymentMethodContentWrapper>
      {paymentMethodError && (
        <div>
          <S.ErrorMessage>{paymentMethodError}</S.ErrorMessage>
        </div>
      )}
    </>
  )
}
