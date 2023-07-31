import { forwardRef, InputHTMLAttributes } from 'react'
import * as S from './Input.styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...props }, ref) => {
    return (
      <S.InputWrapper>
        <S.FormInput ref={ref} {...props} />
        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      </S.InputWrapper>
    )
  },
)
