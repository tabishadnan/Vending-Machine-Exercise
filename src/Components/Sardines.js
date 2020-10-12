import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sardines extends Component {
    render() {
        return (
            <div className="sardines-wrapper">
                <div className="sardines-content">
                    <h4>YOU DON'T EAT THE SARDINES. THE SARDINES, THEY EAT YOU!</h4>
                    <Link to="/">GO BACK</Link>
                </div>
            </div>
        );
    }
}

export default Sardines;