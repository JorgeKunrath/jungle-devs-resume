import { Link } from 'react-router-dom'

export default function LearnMore() {
  return (
    <div>
      <h1>Well, I don't fully know what goes into a fruit salad</h1>
      <p>
        My goal now is to keep expanding this, in a big team with people to exchange knowledge, in a
        fertil enviroment where this is the focus. I believe that I have a lot to learn, and in some
        extend, also to teach.
      </p>
      <p>
        I'm currently studying Typescript, Svelte and a lil bit of Ruby, as languages. I'm also
        really into functional programing as a concept, basic knowledge so far, but loving it.
        Interested to learn ReScript someday, feels like a very good programing language too.
      </p>
      <p>
        <Link to="/what-i-have-done">So what have you done so far?</Link>
      </p>
    </div>
  )
}
