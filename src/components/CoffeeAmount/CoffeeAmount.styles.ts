import styled, { css } from 'styled-components'

export const CoffeeAmountContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  width: 7rem;
  height: 3.2rem;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['base-button']};

  & span {
    color: ${({ theme }) => theme.colors['base-title']};
    font-size: ${({ theme }) => theme.fonts.sizes[24]};
  }

  & button {
    color: ${({ theme }) => theme.colors.purple};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    width: 3rem;
    height: 3.2rem;

    & svg {
      font-size: 1.5rem;
    }
  }
`
