import React, {Component} from 'react'

class DigitalClicker extends Component{

  state = {
    timesClicked: 0
  }


  render(){
    return(
      <button onClick={() => {
        this.setState({timesClicked: this.state.timesClicked + 1})
      }}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker
