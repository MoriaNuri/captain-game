import React, { Component } from 'react'
import './dice.css'


class Die extends Component {
  render() {
    const { face, rolling } = this.props
    return <i className={`Die fas fa-dice-${face}
              ${rolling && 'Die-shaking'}`} />
  }
}

export default Die