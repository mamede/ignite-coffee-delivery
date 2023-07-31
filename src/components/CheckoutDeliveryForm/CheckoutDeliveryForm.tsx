import { useFormContext } from 'react-hook-form'

// ICONS
import { MdLocationPin } from 'react-icons/md'

// COMPONENTS
import { Input } from '../Input/Input'

// STYLES
import * as S from './CheckoutDeliveryForm.styles'

// TYPES
interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function CheckoutDeliveryForm() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <S.DeliveryFormWrapper>
      <S.FormContentTitleWrapper>
        <MdLocationPin size={22} color="#C47F17" />
        <S.FormTextTitle>
          <S.FormContentTitle>Endereço de Entrega</S.FormContentTitle>
          <S.FormContentSubtitle>
            Informe o seu endereço onde deseja receber seu pedido
          </S.FormContentSubtitle>
        </S.FormTextTitle>
      </S.FormContentTitleWrapper>
      <S.FormInputContainer>
        <Input
          placeholder="CEP"
          width="default"
          {...register('zip')}
          error={errors.zip?.message}
        />
        <Input
          placeholder="Rua"
          width="full"
          {...register('adress')}
          error={errors.adress?.message}
        />
        <S.FormInputRowWrapper>
          <Input
            placeholder="Número"
            width="default"
            {...register('number')}
            error={errors.number?.message}
          />
          <Input
            placeholder="Complemento"
            width="full"
            {...register('adressComplement')}
            error={errors.adressComplement?.message}
          />
        </S.FormInputRowWrapper>
        <S.FormInputRowWrapper>
          <Input
            placeholder="Bairro"
            width="default"
            {...register('district')}
            error={errors.district?.message}
          />
          <Input
            placeholder="Cidade"
            width="full"
            {...register('city')}
            error={errors.city?.message}
          />
          <Input
            placeholder="UF"
            width="small"
            maxLength={2}
            {...register('uf')}
            error={errors.uf?.message}
          />
        </S.FormInputRowWrapper>
      </S.FormInputContainer>
    </S.DeliveryFormWrapper>
  )
}
