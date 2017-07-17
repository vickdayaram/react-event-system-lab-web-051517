// Code EyesOnMe Component Here
import React from 'react'
import PropTypes from 'prop-types'

class EyesOnMe extends React.Component {

  constructor(){
    super()
  }

  good(){
    console.log("Good!")
  }

  blur(){
    console.log("Hey! Eyes on me!")
  }

  render(){
    return <button onFocus={this.good} onBlur={this.blur}>Button!</button>
  }
}

export default EyesOnMe
