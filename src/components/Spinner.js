import React, {Component} from 'react';

class Spinner extends Component {
    render() {
        return (
            <div className="ui active dimmer">
                <div className="ui big text loader">{this.props.loadingText}</div>
            </div>
        );
    }
}

Spinner.defaultProps = {
    loadingText: 'Loading...'
}

export default Spinner;
