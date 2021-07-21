import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 2rem 0;
`

export default function Dropdown({ title, children }) {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <p>{children}</p>
    </Wrapper>
  )
}
