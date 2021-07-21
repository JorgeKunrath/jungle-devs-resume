import BlockContent from '../components/BlockContent'
import { Btn, Wrapper } from '../components/GlobalStyles'

export default function Why() {
  return (
    <Wrapper>
      <h1>I'm glad that you asked! I have three main reasons:</h1>
      <div>
        <BlockContent title="People">
          I've met people from Jungle before, and had good moments talking to them. Some time ago I
          had classes alongside a Jungle dev, and showed my interest at working there to her, so I
          made a lot of questions. One day she told me about one of her personal experiencies that
          she had at Jungle, and that she was treated really well there.
          <br />
          <br />I had a similar experience in a company I worked at, with the difference being that
          I wasn't treated as well. Knowing her experience touched me deeply and made me believe
          that Jungle is a place that cares about its employees.
        </BlockContent>
        <BlockContent title="Quality">
          Back in 2019 I went to a lecture about UI/UX by Jungle Devs, presented by two designers. I
          knew one of them from classes I had at UFSC before, and his work was always outstanding
          (specially his <i>TCC</i>!). Considering the attention that is given to Design and the
          care is put into it, the products made at Jungle must be just as outstanding! And this is
          the kind of workplace I want to be in.
        </BlockContent>
        <BlockContent title="The Jungle Devs' Vision">
          "Rethink the way people <strong>learn</strong> and <strong>create</strong> technology" is
          a sentence that always gave me shivers and sparks my curiosity. I want to learn more about
          it, experience this idea and pass it forward.
        </BlockContent>
        <p style={{ textAlign: 'center' }}>
          <Btn to="/learn">So, you enjoy learning?</Btn>
        </p>
      </div>
    </Wrapper>
  )
}
