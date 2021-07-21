import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Btn = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem 0.6rem;
  background-color: var(--jg-green);
  color: white;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
  transition: background-color 0.2s ease;
  border-radius: 5px;

  :focus,
  :hover {
    background-color: var(--jg-green-dark);
  }
`

export const Wrapper = styled.div`
  display: grid;
  place-content: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  grid-gap: 1rem;
  max-width: 800px;
  margin: 0 auto;

  text-align: ${({ $center }) => ($center ? 'center' : 'inherit')};
`
