import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PepsiCan from '../Assets/pepsi-can.jpg';

class Soda extends Component {

    render() {
        return (
            <div className="soda-wrapper">
                <div className="left-pepsi-can">
                    <img className="pepsican" src={PepsiCan}/>
                </div>
                <div className="soda-content">
                    <h4>OMG SUGARRRRRR!</h4>
                    <Link to="/">GO BACK</Link>
                </div>
                <div className="right-pepsi-can">
                    <img className="pepsican" src={PepsiCan}/>
                </div>
            </div>
        );
    }
}

export default Soda;