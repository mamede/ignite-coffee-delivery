// STYLES
import * as S from './AdvantageCard.styles'

export interface AdvantageCardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
  title: string
  color: string
}

export const AdvantageCard = ({ icon, title, color }: AdvantageCardProps) => {
  return (
    <S.AdvantageCardContainer>
      <S.AdvantageCardIconContainer color={color}>
        {icon}
      </S.AdvantageCardIconContainer>
      <S.AdvantageCardText>{title}</S.AdvantageCardText>
    </S.AdvantageCardContainer>
  )
}
