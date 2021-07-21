import { Btn, Wrapper } from '../components/GlobalStyles'

export default function CatchySong() {
  return (
    <Wrapper>
      <div>
        <p>Yo, I'll tell you what I want, what I really, really want</p>
        <p>So tell me what you want, what you really, really want</p>
        <p>I'll tell you what I want, what I really, really want</p>
        <p>So tell me what you want, what you really, really want</p>
        <p>I wanna, (ha) I wanna, (ha) I wanna, (ha) I wanna, (ha)</p>
        <p>
          I wanna really, really, really <strong>to work at jungle devs</strong>
        </p>
      </div>
      <p style={{ textAlign: 'center' }}>
        <Btn to="/but-really">haha, cool</Btn>
      </p>
    </Wrapper>
  )
}
