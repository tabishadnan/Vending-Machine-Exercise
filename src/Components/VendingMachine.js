import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class VendingMachine extends Component {
    render() {
        return (
            <div className="vending-machine-wrapper">
                <div className="vending-left-side-content">
                    <h4>HELLO I AM VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h4>
                </div>
                <div className="vending-right-side-content">
                   <Link to="/soda">SODA</Link>
                   <Link to="/chips">CHIPS</Link>
                   <Link to="/sardines">FRESH SARDINES</Link>
                </div>
            </div>
        );
    }
}

export default VendingMachine;