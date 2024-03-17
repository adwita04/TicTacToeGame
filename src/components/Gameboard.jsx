
export default function Gameboard({onselect , board}){
    return (
        <ol id="game-board">
            {board.map((row, rowIndex)=> (
                <li key={rowIndex} >
                    <ol>
                        {row.map((playerSymbol,colIndex)=>(
                            <li key={colIndex}>
                                <button onClick={() => onselect(rowIndex,colIndex)} disabled={playerSymbol !== null}>
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}