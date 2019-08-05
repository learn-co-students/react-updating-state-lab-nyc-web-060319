// Code DigitalClicker Component Here
import React, {Component} from 'react';

export default class DigitalClicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {timesClicked: 0}
    }

    clickHandler = (event) => {
        this.setState({timesClicked: (this.state.timesClicked + 1)});
    }

    render() {
        // console.log(this.state);
        return (
            <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
        );
    }
}