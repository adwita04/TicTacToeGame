import { useState } from "react";
export default function Player({ name, symbol, isActive, onChangeName}) {
    const [isEditing, setIsEdit] = useState(false);
    const [playerName, setPlayerName] = useState(name);
    
    function handleEditClick()
    {
        setIsEdit(edit => !edit)
        if (isEditing)
            onChangeName(symbol,playerName)
    }
    return (
        <li className={isActive && "active"}>
            <span className="player">
                {!isEditing ? 
                    (<span className="player-name">{playerName}</span>) : 
                    (<input type="text" required value={playerName} onChange={(event) => { setPlayerName(event.target.value) }}></input>)
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}> 
                {isEditing ? "Save" : "Edit"}
            </button>
        </li>
    );
}