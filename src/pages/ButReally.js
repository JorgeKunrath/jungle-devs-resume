import { Btn, Wrapper } from '../components/GlobalStyles'

export default function ButReally() {
  return (
    <Wrapper $center>
      <h1>😅 but really</h1>
      <p>I never wanted to work anywhere so badly before, and it have been 2 years already!</p>
      <p>
        <Btn to="/why">Why you want this so much?</Btn>
        <br />
        <small style={{ opacity: 0.6 }}>
          if you want to know why it took me so long you will have to ask me in an interview u.u
        </small>
      </p>
    </Wrapper>
  )
}
