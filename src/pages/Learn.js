import { Link } from 'react-router-dom'

export default function Learn() {
  return (
    <div>
      <h1>HELL YEEEAAAHHH</h1>
      <p>
        Since I was a kid I always love to learn, well, kinda of all of the kids, but this never
        stoped for me. My YouTube is full of videos of science, programing, engineering. A lot of
        different topics, is not only usefull subjects that I like to learn, but anything. It also
        has Magic (MTG, a card game) too.
      </p>
      <p>
        My programing carrer is mostly self taught. The basics at least. I entered in Design school
        in 2016 (UFSC) and in 2018 I got my first programing job. I was a intern in a engineering
        company. Was a solo intern, had no team or guidance in programing or design. My task was to
        make their new site. I had almost no clue in how to do it, but they trusted me and provide
        the time for study and experiment,{' '}
        <a href="http://creative-solutions.eng.br/" target="_blank" rel="noreferrer">
          and I did it!
        </a>
      </p>
      <p>
        My second internship was also a solo project. I gathered a lot of information in those 2
        years, but I feel like that I really grew up when I started my third internship. There I had
        a team and guidance, people to help me organize my thoughts in usefull ways. Is like the
        saying of the tomato: to know that it's a fruit is one thing, to know that you don't make a
        fruit salad with it is a different one.
      </p>
      <Link to="/learn-more">
        Eww, that would be a pretty nasty fruit salad. So, what is your next step?
      </Link>
    </div>
  )
}
