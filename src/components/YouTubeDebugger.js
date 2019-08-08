import React, {Component} from 'react'

class YouTubeDebugger extends Component{

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  render(){
    return(
      <div>
      <button className="bitrate" onClick={() => {
        let stateCopy = {...this.state.settings}
        stateCopy.bitrate = 12
        this.setState({settings: stateCopy})
      }}>Bitrate</button>

      <button className="resolution" onClick={() => {
        let stateCopy = {...this.state.settings}
        stateCopy.video.resolution = '720p'
        this.setState({settings: stateCopy})
      }}>resolution </button>
      </div>
    )
  }
}

export default YouTubeDebugger
