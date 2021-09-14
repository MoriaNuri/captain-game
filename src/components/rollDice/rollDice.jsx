
import React, { Component } from 'react'
import GameService from '../../services/gameService';
import './rollDice.css'
import Die from '../die/die'

class RollDice extends Component {

  static defaultProps = {
    sides: ['one', 'two', 'three',
      'four', 'five', 'six']
  }

  constructor(props) {
    super(props)

    this.state = {
      die1: 'one',
      rolling: false
    }
    this.OnRoll = this.OnRoll.bind(this)
  }

  OnRoll() {
    const { sides } = this.props
    this.setState({
      // Changing state upon click
      die1: sides[Math.floor(Math.random() * sides.length)],
      rolling: true
    })

    // Start timer of one sec when rolling start
    setTimeout(() => {
      this.setState({ rolling: false })
    }, 1000)

    console.log('state',this.state.die1);

    switch ( this.state.die1) {
      case 'one':
        GameService.roll(1);
          break;
      case 'two':
        GameService.roll(2);
          break;
      case 'three':
        GameService.roll(3);
          break;
      case 'four':
        GameService.roll(4);
          break;
      case 'five':
        GameService.roll(5);
          break;
      case 'six':
        GameService.roll(6);
          break;
          default:console.log(this.state.die1);;

  }

    // GameService.roll(res);
  }

  render() {
    const handleBtn = this.state.rolling ?
      'RollDice-rolling' : ''
    const { die1, rolling } = this.state
    return (
      <div className='RollDice'>
        <button className={handleBtn}
          disabled={this.state.rolling}
          onClick={this.OnRoll}>
          {this.state.rolling ? 'Rolling' : 'Roll dice'}
        </button>
        <div className='RollDice-container'>
          <Die face={die1} rolling={rolling} />
        </div>
      </div>
    )
  }
}

export default RollDice