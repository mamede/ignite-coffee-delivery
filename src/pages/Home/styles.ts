import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const HomeSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5.875rem;
`

export const HomeInfo = styled.div`
  height: 36rem;
  max-width: calc(100% - 50rem);
`

export const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors['base-title']};
  font-family: ${({ theme }) => theme.fonts.family.secondary};
  font-size: ${({ theme }) => theme.fonts.sizes[48]};
  font-weight: 800;
  line-height: 130%; /* 62.4px */
`

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors['base-subtitle']};
  font-family: ${({ theme }) => theme.fonts.family.primary};
  font-size: ${({ theme }) => theme.fonts.sizes[20]};
  font-weight: 400;
  line-height: 130%; /* 26px */
  margin: 2rem 0;
`

export const Advantages = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`

export const Image = styled.img`
  width: 47.6rem;
  height: 36rem;
`

export const CoffeesSection = styled.section``

export const CoffeesSectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors['base-subtitle']};
  font-family: ${({ theme }) => theme.fonts.family.secondary};
  font-size: ${({ theme }) => theme.fonts.sizes[32]};
  font-weight: 800;
  line-height: 130%; /* 41.6px */
`

export const CoffeesContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`
