import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'

// STYLES
import * as S from './PaymentMethordInput.styles'

interface PaymentMethodInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode
  label: string
}

// eslint-disable-next-line react/display-name
export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ icon, label, id, ...props }, ref) => {
  return (
    <S.PaymentMethodButton>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <S.ContentContainer>
          {icon}
          {label}
        </S.ContentContainer>
      </label>
    </S.PaymentMethodButton>
  )
})
