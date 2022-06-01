import './GameOver.css'

const GameOver = ({ retry, score }) => {
    return (
        <div>
            <h1>Fim de Jogo!</h1>
            <h2>Sua pontuação foi de: <span>{score}</span> pontos!</h2>
            <button onClick={retry}>Tela inicial</button>
        </div>
    )
}

export default GameOver