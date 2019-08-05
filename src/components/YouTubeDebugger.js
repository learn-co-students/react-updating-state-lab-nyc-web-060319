// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

export default class YouTubeDebugger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        };
    }

    bitrateClickHandler = (event) => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        });
    }

    resolutionClickHandler = (event) => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                   resolution: '720p'
                }
            }
        });
    }

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.bitrateClickHandler}/>
                <button className='resolution' onClick={this.resolutionClickHandler}/>
            </div>
        );
    }
}