import { Link } from 'react-router-dom'

export default function ButReally() {
  return (
    <div>
      <h2>😅 no, but really</h2>
      <p>I never wanted to work anywhere so badly before, and it have been 2 years already!</p>
      <Link to="/why">But why you want this?</Link>
      <p>
        <small>
          if you want to know why it took me so long you will have to ask me in an interview u.u
        </small>
      </p>
    </div>
  )
}
