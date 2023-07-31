import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  height: 31rem;
  width: 25.6rem;
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 5px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & img {
    margin-top: -4.5rem;
    width: 12rem;
    margin-bottom: 0.5rem;
  }
`

export const CoffeeTags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fonts.sizes[16]};

  & span {
    padding: 5px 10px;
    color: ${({ theme }) => theme.colors['yellow-dark']};
    background-color: ${({ theme }) => theme.colors['yellow-light']};
    border-radius: 15px;
    font-weight: bold;
    margin: 0.5rem;
  }
`

export const CoffeeInfo = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 10px 0;

  & h6 {
    margin-bottom: 0.7rem;
    font-size: ${({ theme }) => theme.fonts.sizes[32]};
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  & p {
    color: ${({ theme }) => theme.colors['base-label']};
    font-size: ${({ theme }) => theme.fonts.sizes[24]};
  }
`

export const CoffeeSale = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  & p {
    font-size: ${({ theme }) => theme.fonts.sizes[24]};
    margin-right: 2rem;
  }

  & p span {
    color: ${({ theme }) => theme.colors['base-title']};
    font-family: ${({ theme }) => theme.fonts.family.secondary};
    font-weight: bold;
    font-size: ${({ theme }) => theme.fonts.sizes[32]};
  }

  & > button {
    background-color: ${({ theme }) => theme.colors['purple-dark']};
    border: none;
    border-radius: 5px;
    margin-left: 0.8rem;
    width: 3.2rem;
    height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > button svg {
    border-radius: 5px;
    color: white;
    font-size: 2rem;
  }
`
