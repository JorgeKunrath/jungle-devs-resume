import { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import useSound from 'use-sound'

import wannabe from '../assets/spice_girls_wannabe.mp3'
import { Btn, Wrapper } from '../components/GlobalStyles'
import Lyrics from '../components/Lyrics'
import ProgressBar from '../components/ProgressBar'

const fadeIn = keyframes`
  from {
    opacity: 0%;
  }
  to {
    opacity: 100%;
  }
`

const WrapperButton = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s ease 14s forwards;
`

export default function CatchySong() {
  const [play, { sound, stop }] = useSound(wannabe)

  useEffect(() => {
    if (sound) {
      play()
      sound.fade(1, 0, 17000)
    }
    return stop
  }, [play, sound, stop])

  return (
    <Wrapper>
      <Lyrics />
      <ProgressBar />
      <WrapperButton>
        <p style={{ textAlign: 'center' }}>
          <Btn to="/but-really">haha, cool</Btn>
        </p>
      </WrapperButton>
    </Wrapper>
  )
}
