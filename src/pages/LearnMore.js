import { Btn, Wrapper } from '../components/GlobalStyles'

export default function LearnMore() {
  return (
    <Wrapper>
      <h1>Well, I still have so much more to learn</h1>
      <div>
        <p>
          My goal now is to keep learning new things, preferably with a big team! Having a lot of
          people to exchange knowledge and learn new things is really a must for me. I believe that
          I have a lot to learn, and also some things to teach.
        </p>
        <p>
          I'm currently studying Typescript, Svelte and a bit of Ruby. I'm also really into
          functional programming as a concept, I only have some basic knowledge so far, but I'm
          loving it. I also look forward to learn ReScript eventually, it feels like a very good
          programing language too and it has caught my interest.
        </p>
      </div>
      <p style={{ textAlign: 'center' }}>
        <Btn to="/what-i-have-done">And what are your experiences?</Btn>
      </p>
    </Wrapper>
  )
}
