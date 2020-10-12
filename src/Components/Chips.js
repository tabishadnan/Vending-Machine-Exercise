import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Lays from '../Assets/lays.png';

class Chips extends Component {

    state = {
        counter: 0,
        imgArr: []
    }

    bagsEaten = () => {
        let imgArrCoppy = [...this.state.imgArr];
        this.setState({
            counter: this.state.counter + 1,
            imgArr: imgArrCoppy.concat(this.state.counter),
        });
    }

    render() {
        return (
            <div className="chips-wrapper">
                <div className="lays-wrapper">
                    {this.state.imgArr.map(lays => {
                        return (
                            <div className="lays-chips">
                                <img src={Lays} />
                            </div>
                        )
                    })}
                </div>
                <div className="chips-content">
                    <h4>BAGS EATEN: {this.state.counter}</h4>
                    <button onClick={this.bagsEaten}>NOM NOM NOM</button>
                    <Link to="/">GO BACK</Link>
                </div>
                <div className="right-chips">
                </div>
            </div>
        );
    }
}

export default Chips;