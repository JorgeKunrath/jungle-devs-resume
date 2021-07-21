import styled from 'styled-components'
import Dropdown from '../components/Dropdown'
import { Btn, Wrapper } from '../components/GlobalStyles'

export default function Why() {
  return (
    <Wrapper>
      <h1>Glad that you ask! I want for three main reasons</h1>

      <div>
        <Dropdown title="1. People">
          I meet some people from Jungle, and had good moments of chatting with one of these. We did
          a class together in UFSC, at this time I already wanted to work at Jungle, so I asked a
          lot of stuff about you to her. One day she told me about a personal experience she had
          that Jungles handled very well by being kindly. I had a similar experience myself, but
          even that my company handle it well, wasn't very supportive. This touch me, a company that
          is able to do it made me believe that you actually care about people.
        </Dropdown>

        <Dropdown title="2. Quality">
          I went to a Jungle Devs talk about UI/UX in 2019 (when I started to being tamed, as used
          to say by the little fox). This talk was presented by two designers. One of these I also
          had a class in UFSC and he always presented amazying works (his <i>TCC</i> is
          formidable!). Considering the attention that is given to design, alied to the culture of
          continuous growth, the products at Jungle must be awesome! And this is exactly the kind of
          place I want to work at.
        </Dropdown>

        <Dropdown title="3. The Jungle Devs Vision">
          "Rethink the way people <strong>learn</strong> and <strong>create</strong> technology" is
          a sentence that always gave me shivers and fires my curiosity. I want to know more about
          it, live this idea and pass it forward.
        </Dropdown>

        <p style={{ textAlign: 'center' }}>
          <Btn to="/learn">So you enjoy learning?</Btn>
        </p>
      </div>
    </Wrapper>
  )
}
