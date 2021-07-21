import { Btn, Wrapper } from '../components/GlobalStyles'

export default function LearnMore() {
  return (
    <Wrapper>
      <h1>Well, I don't fully know what goes into a fruit salad</h1>
      <div>
        <p>
          My goal now is to keep expanding this, in a big team with people to exchange knowledge, in
          a fertil enviroment where this is the focus. I believe that I have a lot to learn, and in
          some extend, also to teach.
        </p>
        <p>
          I'm currently studying Typescript, Svelte and a lil bit of Ruby, as languages. I'm also
          really into functional programing as a concept, basic knowledge so far, but loving it.
          Interested to learn ReScript someday, feels like a very good programing language too.
        </p>
      </div>
      <p style={{ textAlign: 'center' }}>
        <Btn to="/what-i-have-done">And what fruits you already discovered?</Btn>
      </p>
    </Wrapper>
  )
}
