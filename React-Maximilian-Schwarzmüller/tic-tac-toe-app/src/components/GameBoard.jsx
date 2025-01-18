/* eslint-disable react/prop-types */

const GameBoard = ({ onSelectSquareChangePlayer, board }) => {
    // state for 3 X 3 game board.
    // const [gameBoard, setGameBoard] = React.useState(initialGameBoard);

    // function to manage each square.
    // function handleSquareChange(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         // method one level deep copy
    //         const updatedGameBoard = [
    //             ...prevGameBoard.map((innerArray) => [...innerArray]),
    //         ];

    //         // method deep copy
    //         // const updatedGameBoard = [...prevGameBoard];
    //         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedGameBoard;
    //     });

    //     onSelectSquareChangePlayer();
    // }

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                // using index is not best practice because it is not strictly tied to the array
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button
                                    onClick={() =>
                                        onSelectSquareChangePlayer(
                                            rowIndex,
                                            colIndex
                                        )
                                    }
                                    disabled={playerSymbol !== null}
                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
};

export { GameBoard };
