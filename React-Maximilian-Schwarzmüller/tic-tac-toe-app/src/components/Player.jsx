import PropTypes from "prop-types";
import React from "react";

export const Player = ({
    playerName,
    symbol,
    isActive,
    onChangePlayerName,
}) => {
    // state variables
    const [isEditing, setIsEditing] = React.useState(false);
    const [newPlayerName, setPlayerNewName] = React.useState(playerName);

    // handle eidt/save button
    const handleEditClick = () => {
        setIsEditing((wasEditing) => !wasEditing);
        onChangePlayerName(symbol, newPlayerName);
    };

    /**
     * handle the text entered inside the input field
     * works for every keystroke
     * accepts an event, which is used for managing the input data dynamically
     */
    const handleChangeText = (event) => {
        setPlayerNewName(event.target.value);
    };

    // handle setting playername dynamically as a code snippet
    let playerNameHTML = <span className="player-name">{newPlayerName}</span>;

    // if isEditing state is true then enable user to edit the text field
    if (isEditing) {
        playerNameHTML = (
            <input
                type="text"
                required
                value={newPlayerName}
                onChange={handleChangeText}
            />
        );
    }

    // JSX
    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {playerNameHTML}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {isEditing ? "Save" : "Edit"}
            </button>
        </li>
    );
};

// props for validation, js specific
Player.propTypes = {
    playerName: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onChangePlayerName: PropTypes.func.isRequired,
};
