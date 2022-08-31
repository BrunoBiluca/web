const HowToPlayView = (props) => {
  const { game } = props
  return (
    <div>
      <h2>How to Play</h2>
      <ul>
        {
          game.howToPlay
            .map(h =>
              <li key={h.id}>
                <strong>{h.input}</strong>
                <span>{h.action}</span>
              </li>
            )
        }
      </ul>
    </div>
  )
}

export default HowToPlayView;