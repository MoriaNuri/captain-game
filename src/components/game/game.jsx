import React from 'react';
import GameBoard from '../gameBoard/gameBoard';
import SidePanel from '../sidePanel/sidePanel';
import './game.css';


const GameContainer = props => {
    return (
        <div className="game-container">
            <GameBoard />
            <SidePanel />
        </div>
    )
}

export default GameContainer;