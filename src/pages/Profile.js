import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from '../context/GlobalContext'

export default function Profile() {
  const { setFinished } = useContext(GlobalContext)

  useEffect(() => {
    setFinished(true)
  }, [setFinished])

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      <div>
        <h1>Hello there, I'm Jorge Kunrath, and I want to work with you</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
          alt=""
        />
        <p>(48) 99145 2219</p>
        <p>jorgeks95@gmail.com</p>
        <p>
          <a href="https://github.com/JorgeKunrath" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
        <p>
          <a href="https://linkedin.com/in/jorge-kunrath" target="_blank" rel="noreferrer">
            Linkedin
          </a>
        </p>
      </div>
      <div>
        <p>Index</p>
        <ul>
          <li>
            <Link to="/">The beginning</Link>
          </li>
          <li>
            <Link to="/why">Why I want to work at Jungle</Link>
          </li>
          <li>
            <Link to="/learn">I love to learn</Link>
          </li>
          <li>
            <Link to="/learn-more">My goals</Link>
          </li>
          <li>
            <Link to="/what-i-have-done">Experiences</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
