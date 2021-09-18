import React, {Component} from 'react'
import './dice.css'


  
class Die extends Component{

  componentDidMount(){
  }
  
  render(){
    const {face, rolling} = this.props
    console.log(this.props,'props from dice');
      
    // Using font awesome icon to show 
    // the exactnumber of dots
    return <i className={`Die fas fa-dice-${face}
              ${rolling && 'Die-shaking'}`}/>
  }
}
  
export default Die