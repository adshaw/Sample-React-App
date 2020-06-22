import React, {Component} from 'react';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "../components/Spinner";

class SeasonHomePage extends Component {
    state = {lat: null, errorMsg: '', isLoading: true};

    componentDidMount() {
        console.log('ComponentDidMount---SeasonHomePage');

        this.getCurrentLocation();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate---SeasonHomePage');
    }


    render() {
        return (
            <div>
                {this.state.isLoading && <Spinner loadingText={`Please allow to read Location`}/>}
                {!this.state.isLoading && <SeasonDisplay lat={this.state.lat}/>}

            </div>
        );
    }

    getCurrentLocation() {
        window.navigator.geolocation.getCurrentPosition(
            location => {
                console.log('location', location);
                this.setState({lat: location.coords.latitude, isLoading: false});
            },
            err => {
                console.log(err);
                this.setState({errorMsg: err.message});
            })
    }
}

export default SeasonHomePage;
