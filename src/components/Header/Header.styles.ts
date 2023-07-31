import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`

export const LogoAnchor = styled.a``

export const Logo = styled.img``

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`

export const LocationContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.375rem;
  background: ${({ theme }) => theme.colors['purple-light']};
`

export const CityName = styled.span`
  color: ${({ theme }) => theme.colors['purple-dark']};
  font-family: ${({ theme }) => theme.fonts.family.primary};
  font-size: ${({ theme }) => theme.fonts.sizes[14]};
  font-weight: 400;
  line-height: 130%; /* 18.2px */
`

export const CartAnchor = styled.a`
  max-height: 2.375rem;
  padding: 0.5rem;
  border-radius: 0.375rem;
  background: ${({ theme }) => theme.colors['yellow-light']};
`
