import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat : null, errorMessage : '' };

        
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat : position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage : err.message });
            }
                    
        );
        
    }

    componentDidUpdate() {
        console.log("Component was just updated - it rerendered");
        
    }
    render() {

        if(!this.state.lat && this.state.errorMessage) {
            return (
                <div>
                    <h4>Error : { this.state.errorMessage }</h4>
                </div>
            );
        }

        if(this.state.lat && !this.state.errorMessage) {
            return (
                <div>
                    <h4> <SeasonDisplay lat = { this.state.lat } /> </h4>
                </div>
            );
        }
        return (
        <div>
            <Spinner />
        </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
