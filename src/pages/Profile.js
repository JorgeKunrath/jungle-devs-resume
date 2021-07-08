export default function Profile() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      <div>
        <h1>Hello there, I'm Jorge Kunrath</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
          alt=""
        />
        <p>telefone</p>
        <p>email</p>
        <p>github</p>
        <p>linkedin</p>
        <pre>uma frase aqui...?</pre>
      </div>
      <div>
        <p>Índice</p>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/catchy-song">Song</a>
          </li>
          <li>
            <a href="/why">Why I want to work at Jungle</a>
          </li>
          <li>
            <a href="/learn">I love to learn</a>
          </li>
          <li>
            <a href="/learn-more">Goals</a>
          </li>
          <li>
            <a href="/what-i-have-done">Experiences</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
