import { Btn, Wrapper } from '../components/GlobalStyles'

export default function Learn() {
  return (
    <Wrapper>
      <h1>HELL YEEEAAAHHH!!</h1>
      <div>
        <p>
          I've always loved to learn new things, and even my Youtube channel is filled with videos
          of different subjects. These subjects include Science in general, Programming, Engineering
          and even Magic The Gathering (a card game that I love!).
        </p>
        <p>
          About programming, I am mostly self taught. I started Design school back in 2016, at UFSC,
          and two years later I got my first programming job as an intern in an engineering company
          — I was the only intern there and had no team and no guidance, in either programming or
          design.
        </p>
        <p>
          My assigned task there was to create their new website, and I had zero to no clue on how
          to do it, but they trusted me and provided me with time for me to study and learn what I
          needed. This confidence they gave to me wasn't in vain:{' '}
          <a href="http://creative-solutions.eng.br/" target="_blank" rel="noreferrer">
            I managed to deliver what they asked for.
          </a>
        </p>
        <p>
          Just like my first internship, my second one was also a solo project. This time I had way
          much more experience, but I feel like I only started really growing during my third
          internship. That time I had a full team and guidance, people with more experience to teach
          me what I needed to know and help me grow.
        </p>
      </div>
      <p style={{ textAlign: 'center' }}>
        <Btn to="/learn-more">So, what is your next step?</Btn>
      </p>
    </Wrapper>
  )
}
