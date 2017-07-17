// Code Keypad Component Here

import React from 'react'
import PropTypes from 'prop-types'

class Keypad extends React.Component {

  constructor(props){
    super(props)
  }

  password(){
    console.log("Entering password...")
  }

  render(){
    return(
      <input type="password" onKeyUp={this.password}/>
    )
  }
}

export default Keypad
