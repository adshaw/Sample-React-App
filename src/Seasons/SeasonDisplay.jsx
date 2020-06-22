import React, {Component} from 'react';

class SeasonDisplay extends Component {

    seasonConfig = {
        summer: {
            text: 'Its Summer',
            iconName: 'sun'
        },
        winter: {
            text: 'Its Winter',
            iconName: 'snowflake'
        }
    }

    componentDidMount() {
        console.log('ComponentDidMount---SeasonDisplay');
    }

    render() {
        return (
            <div>
                <h1>{this.seasonText()}</h1>
            </div>
        );
    }

    getSeason(lat, month) {
        if (month > 2 && month < 9) {
            return lat > 0 ? 'Summer' : 'Winter';
        } else {
            return lat > 0 ? 'Winter' : 'Summer';
        }

    }

    seasonText() {
        const season = this.getSeason(this.props.lat, new Date().getMonth());
        return season === 'Winter' ? 'Burr it is chilly' : 'Lets hit to the beach!'
    }
}

export default SeasonDisplay;
