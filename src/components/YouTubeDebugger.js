import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    updateBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    updateRes = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>

                <button onClick={this.updateBitrate} className="bitrate">BR</button>
                <button onClick={this.updateRes} className="resolution">RES</button>
            </div>
        )
    }
}