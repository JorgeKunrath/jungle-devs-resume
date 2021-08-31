import { useContext, useEffect } from 'react'
import styled from 'styled-components'

import { GlobalContext } from '../context/GlobalContext'
import profilePic from '../assets/perfil-linkedin.jpg'
import { Wrapper } from '../components/GlobalStyles'
import NavigationIndex from '../components/NavigationIndex'

const Inner = styled.div`
  display: grid;
  grid-gap: 2rem;
  place-items: center;
  margin: 3rem 0;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 3fr;
  }
`

const Pic = styled.img`
  border-radius: 500px;
  max-width: 200px;
  max-height: 200px;
`

const Title = styled.h1`
  text-align: left;
  font-weight: normal;
  color: inherit;
  margin-bottom: 1rem;

  strong {
    color: var(--jg-green);
  }
`

const Contact = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;

  p {
    margin: 0;
    font-size: 0.8rem;
  }
`

export default function Profile() {
  const { setFinished } = useContext(GlobalContext)

  useEffect(() => {
    setFinished(true)
  }, [setFinished])

  return (
    <Wrapper>
      <Inner>
        <Pic src={profilePic} alt="Foto de perfil do Jorge Kunrath" />
        <div>
          <Title>
            Hello there,
            <br />
            I'm <strong>Jorge Kunrath</strong>, and I want to work with you
          </Title>
          <Contact>
            <div>
              <p>(**) ***** ****</p>
              <p>*******@gmail.com</p>
            </div>
            <div>
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
          </Contact>
        </div>
      </Inner>
      <NavigationIndex />
    </Wrapper>
  )
}
