import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Btn = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--jg-green);
  color: white;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.2s ease;
  border-radius: 5px;
  line-height: 1.2;

  :focus,
  :hover {
    background-color: var(--jg-green-dark);
    color: white;
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
