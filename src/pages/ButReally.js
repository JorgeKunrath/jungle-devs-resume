import { Btn, Wrapper } from '../components/GlobalStyles'

export default function ButReally() {
  return (
    <Wrapper $center>
      <h1>😅 but really</h1>
      <p>
        I never wanted to work somewhere so badly before, and I've been waiting for two years
        already!
      </p>
      <p>
        <Btn to="/why">Why do you want this so much?</Btn>
        <br />
        <small style={{ opacity: 0.6, display: 'block', marginTop: '0.5rem' }}>
          If you want to know why it took me so long, you will have to ask me during an interview
        </small>
      </p>
    </Wrapper>
  )
}
