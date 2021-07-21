import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from '../context/GlobalContext'

export default function Welcome() {
  const { finished } = useContext(GlobalContext)

  return (
    <div>
      <h1>Welcome Jungler!</h1>
      <p>In the beginning of the experience will play a music, and I warn you, it's catchy!</p>
      <a href="./catchy-song">Start</a>
      <br />
      {finished && <Link to="/profile">skip to my profile info</Link>}
    </div>
  )
}
