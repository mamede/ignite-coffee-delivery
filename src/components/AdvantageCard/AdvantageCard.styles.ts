import styled, { css } from 'styled-components'

function renderColor(color: string) {
  switch (color) {
    case 'yellow-dark':
      return css`
        ${({ theme }) => theme.colors['yellow-dark']}
      `
    case 'yellow':
      return css`
        ${({ theme }) => theme.colors.yellow}
      `
    case 'base-text':
      return css`
        ${({ theme }) => theme.colors['base-text']}
      `
    case 'purple':
      return css`
        ${({ theme }) => theme.colors['yellow-dark']}
      `
    default:
      return css`
        ${({ theme }) => theme.colors.background}
      `
  }
}

interface IconProps {
  color: string
}

export const AdvantageCardContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`

export const AdvantageCardIconContainer = styled.div<IconProps>`
  display: flex;
  background-color: ${({ color }) => renderColor(color)};
  padding: 0.5rem;
  border-radius: 50%;
`

export const AdvantageCardText = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes[16]};
  color: ${({ theme }) => theme.colors['base-text']};
  margin-left: ${({ theme }) => theme.fonts.sizes[12]};
  font-weight: 400;
  line-height: 130%; /* 20.8px */
`
