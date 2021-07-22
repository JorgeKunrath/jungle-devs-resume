import styled, { keyframes } from 'styled-components'

const slideUp = keyframes`
  0% {
    transform: translateY(4em);
  }
  20% {
    transform: translateY(0);
  }
  80% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-4em);
  }
`

const slideUpStop = keyframes`
  0% {
    transform: translateY(4em);
  }
  20% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
`

const Wrapper = styled.div`
  font-size: 1.25rem;
  height: 5em;
  position: relative;
  overflow: hidden;
  z-index: 1;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  --direction: bottom;
  ::before,
  ::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 1.5em;
    background-image: linear-gradient(to var(--direction), var(--bg), transparent);
    z-index: 2;
  }

  ::after {
    --direction: top;
    bottom: 0;
  }
`
const Line = styled.div`
  min-height: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  grid-row: 1 / 1;
  grid-column: 1 / 1;

  transform: translateY(4em);
  animation: ${({ $last }) => ($last ? slideUpStop : slideUp)} ${({ $dur }) => $dur} ease
    ${({ $del }) => $del} forwards;

  p {
    margin: 0;
  }

  strong {
    color: var(--jg-green);
  }
`

export default function Lyrics() {
  return (
    <Wrapper>
      <Line $dur="3.5s" $del="-0.25s">
        <p>Yo, I'll tell you what I want, what I really, really want</p>
      </Line>
      <Line $dur="2.5s" $del="2.55s">
        <p>So tell me what you want, what you really, really want</p>
      </Line>
      <Line $dur="2.7s" $del="4.5s">
        <p>I'll tell you what I want, what I really, really want</p>
      </Line>
      <Line $dur="3s" $del="6.6s">
        <p>So tell me what you want, what you really, really want</p>
      </Line>
      <Line $dur="2.5s" $del="9s">
        <p>I wanna, (ha) I wanna, (ha) I wanna, (ha) I wanna, (ha)</p>
      </Line>
      <Line $dur="3s" $del="11s" $last={true}>
        <p>
          I wanna really, really, really <strong>to work at jungle devs</strong>
        </p>
      </Line>
    </Wrapper>
  )
}
