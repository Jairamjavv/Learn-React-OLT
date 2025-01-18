/* eslint-disable react/prop-types */
const GameOver = ({ winnerPlayer, onGameOver }) => {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            <p>{winnerPlayer ? `${winnerPlayer} Won!` : "It's a Draw"}</p>
            <p>
                <button onClick={onGameOver}>Rematch!</button>
            </p>
        </div>
    );
};

export { GameOver };
