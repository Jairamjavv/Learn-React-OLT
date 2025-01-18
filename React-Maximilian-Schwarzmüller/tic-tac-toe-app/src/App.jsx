import { useState } from "react";

import { Player } from "./components/Player";
import { GameBoard } from "./components/GameBoard";
import { Log } from "./components/Log";
import { GameOver } from "./components/GameOver";

import { WINNING_COMBINATIONS } from "./winning-combinations";

// Constant hardcoded values
const PLAYERS = {
    X: "Player 1",
    O: "Player 2",
};

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function deriveActivePlayer(gameTurns) {
    let currentPlayer = "X";
    // Updating the currentPlayer based on the previous turn from game turn
    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O";
    }

    return currentPlayer;
}

function deriveWinner(gameBoard, playerNames) {
    let winnerPlayer = null;

    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol =
            gameBoard[combination[0].row][combination[0].col];
        const secondSquareSymbol =
            gameBoard[combination[1].row][combination[1].col];
        const thirdSquareSymbol =
            gameBoard[combination[2].row][combination[2].col];

        if (
            firstSquareSymbol &&
            firstSquareSymbol === secondSquareSymbol &&
            secondSquareSymbol === thirdSquareSymbol
        ) {
            winnerPlayer = playerNames[firstSquareSymbol];
        }
    }
    return winnerPlayer;
}

function deriveGameBoard(gameTurns) {
    let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;

        // derived state
        /**
         * This turn acts as an derived state for gameboard.
         * Earlier below in handleSquareChange we created a gameboard useState and updated its value when we click in the box.
         * Now handleSelectSquare from App.jsx, manages the current player and tracks the colIndex and rowIndex for the change.
         */
        gameBoard[row][col] = player;
    }

    return gameBoard;
}

function App() {
    // state for setting active player
    // const [activePlayer, setActivePlayer] = useState("X");
    // state for setting the turn/move
    const [gameTurns, setGameTurns] = useState([]);
    const [playerNames, setPlayerNames] = useState(PLAYERS);

    const currentPlayer = deriveActivePlayer(gameTurns);

    const gameBoard = deriveGameBoard(gameTurns);

    const winnerPlayer = deriveWinner(gameBoard, playerNames);

    const hasDraw = gameTurns.length === 9 && !winnerPlayer;

    // function that changes symbol based on the click in gameboard.
    function handleSelectSquare(rowIndex, colIndex) {
        // get the previous player and change the symbol
        // setActivePlayer((curActivePlayer) =>
        //     curActivePlayer === "X" ? "O" : "X"
        // );
        setGameTurns((prevTurns) => {
            // Creating this value in order to not mess with any other state variables like curActivePlayer
            // Updating the currentPlayer based on the previous turn
            const currentPlayer = deriveActivePlayer(prevTurns);
            const updatedTurns = [
                {
                    square: {
                        row: rowIndex,
                        col: colIndex,
                    },
                    player: currentPlayer,
                },
                ...prevTurns,
            ];

            return updatedTurns;
        });
    }

    function handleRestart() {
        setGameTurns([]);
    }

    function handlePlayerNameChange(symbol, newName) {
        setPlayerNames((prevPlayerNames) => {
            return {
                ...prevPlayerNames,
                [symbol]: newName,
            };
        });
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        playerName={PLAYERS.X}
                        symbol={"X"}
                        isActive={currentPlayer === "X"}
                        onChangePlayerName={handlePlayerNameChange}
                    />
                    <Player
                        playerName={PLAYERS.O}
                        symbol={"O"}
                        isActive={currentPlayer === "O"}
                        onChangePlayerName={handlePlayerNameChange}
                    />
                </ol>
                {(winnerPlayer || hasDraw) && (
                    <GameOver
                        winnerPlayer={winnerPlayer}
                        onGameOver={handleRestart}
                    />
                )}
                <GameBoard
                    onSelectSquareChangePlayer={handleSelectSquare}
                    board={gameBoard}
                />
            </div>
            <Log turns={gameTurns} />
        </main>
    );
}

export default App;
