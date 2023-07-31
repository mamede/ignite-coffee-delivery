import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`

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

export const CartAnchor = styled.button`
  position: relative;
  max-height: 2.375rem;
  padding: 0.5rem;
  border-radius: 0.375rem;
  background: ${({ theme }) => theme.colors['yellow-light']};
`

export const CartLength = styled.span`
  position: absolute;
  top: -50%;
  right: -50%;
  transform: translate(-50%, 50%);
  content: '';
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme['yellow-700']};
  color: ${({ theme }) => theme.white};
  font-weight: 700;
  font-size: 0.75rem;
`
