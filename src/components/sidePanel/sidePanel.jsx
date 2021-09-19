
import React from 'react';
import './sidePanel.css'
import RollDice from '../rollDice/rollDice'


const SidePanel = props => {


  return (
    <div className="gameSidePanel">
      <RollDice/>
    </div>
  )
}

export default SidePanel;