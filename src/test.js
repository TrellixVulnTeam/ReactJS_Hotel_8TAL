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

    

    componentDidMount() {
        axios({
            method: 'POST',
            data:{text:"jjjj"},
            url: './wrap',
            timeout: 4000,    // 4 seconds timeout          
           })
           .then(response => {
             this.setState({data:response.data});
             console.log(response);
          })        
          .catch(error => console.error('timeout exceeded'));
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