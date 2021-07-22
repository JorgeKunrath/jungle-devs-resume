import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  color: #777777;

  a {
    color: inherit;
    text-decoration: underline;
  }
`

export default function Index() {
  return (
    <Wrapper>
      <div>
        <Link to="/">The beginning</Link> &gt; <Link to="/why">Why I want to work at Jungle</Link>{' '}
        &gt; <Link to="/learn">I love to learn</Link> &gt; <Link to="/learn-more">My goals</Link>{' '}
        &gt; <Link to="/what-i-have-done">Experiences</Link> &gt; <span>Profile</span>
      </div>
    </Wrapper>
  )
}
