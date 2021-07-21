import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from '../context/GlobalContext'
import { Btn, Wrapper } from '../components/GlobalStyles'

export default function Welcome() {
  const { finished } = useContext(GlobalContext)

  return (
    <Wrapper $center>
      <h1>Welcome, Jungler!</h1>
      <p>In the beginning of the experience will play a music, and I warn you, it's catchy!</p>
      <p>
        <Btn to="/catchy-song">Start</Btn>
        <br />
        <small>
          {finished && (
            <Link to="/profile" style={{ textDecoration: 'none', color: 'var(--jg-green)' }}>
              skip to my profile info
            </Link>
          )}
        </small>
      </p>
    </Wrapper>
  )
}
