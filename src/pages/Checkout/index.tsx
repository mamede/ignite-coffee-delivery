import { useNavigate } from 'react-router-dom'
import { BsCurrencyDollar } from 'react-icons/bs'

// FORM
import * as zod from 'zod'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

// COMPONENTS
import { CheckoutDeliveryForm } from '../../components/CheckoutDeliveryForm/CheckoutDeliveryForm'
import { CheckoutProductItem } from '../../components/CheckoutProductItem/CheckoutProductItem'
import { ProductProps } from '../../components/CoffeeCard/CoffeeCard'
import { CheckoutResume } from '../../components/CheckoutResume/CheckoutResume'
import { PaymentMethods } from '../../components/PaymentMethods/PaymentMethods'

// HOOKS
import { useCart } from '../../hooks/useCart'

// STYLES
import * as S from './styles'

enum PaymentMethodsProps {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmOrderFormValidationSchema = zod.object({
  zip: zod.string().min(1, 'Informe o CEP'),
  adress: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  adressComplement: zod.string().optional(),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(1, 'Informe o estado'),
  paymentMethod: zod.nativeEnum(PaymentMethodsProps, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export function Checkout() {
  const { cartItems, cleanCart } = useCart()

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate('/checkout-done', {
      state: data,
    })

    cleanCart()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <S.CheckoutContainer onSubmit={handleSubmit(handleConfirmOrder)}>
        <S.OrderDeliveryPaymentWrapper>
          <S.WrapperTitle>Complete seu pedido</S.WrapperTitle>

          <CheckoutDeliveryForm />

          <S.PaymentMethodWrapper>
            <S.FormContentTitleWrapper>
              <BsCurrencyDollar size={22} color="#8047F8" />

              <S.FormTextTitle>
                <S.FormContentTitle>Pagamento</S.FormContentTitle>

                <S.FormContentSubtitle>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar.
                </S.FormContentSubtitle>
              </S.FormTextTitle>
            </S.FormContentTitleWrapper>

            <PaymentMethods />
          </S.PaymentMethodWrapper>
        </S.OrderDeliveryPaymentWrapper>

        <S.OrderResumeCompleteWrapper>
          <S.WrapperTitle>Cafés selecionados</S.WrapperTitle>

          <S.OrderResumeWrapper>
            <S.CheckoutItemsWrapper>
              {cartItems.map((coffee: ProductProps) => {
                return <CheckoutProductItem key={coffee.id} coffee={coffee} />
              })}
            </S.CheckoutItemsWrapper>

            <CheckoutResume />

            <S.CheckoutConfirmButton
              type="submit"
              disabled={cartItems.length === 0}
            >
              Confirmar pedido
            </S.CheckoutConfirmButton>
          </S.OrderResumeWrapper>
        </S.OrderResumeCompleteWrapper>
      </S.CheckoutContainer>
    </FormProvider>
  )
}
