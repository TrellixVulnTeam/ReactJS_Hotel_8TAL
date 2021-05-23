import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

class Test extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:null
        }
    }

    


    render() {
        return (
            <div>
                <p id="text">data</p>
                <p>{this.state.data}</p>
            </div>
        );
    }
}


export default Test;