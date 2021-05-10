import React, { Component } from 'react';
import axios from 'axios'
class test extends Component {
    constructor(){
        super()
        this.state={data:"a"}
    }
   async     CALL(){
 
       return await axios.get('http://localhost/long/api/classapi.php/product');
      
    }
    GET=()=>{

        this.CALL.then((res)=>{
            console.log(res.data)
            this.setState({data:res.data})
        })
    }
    render() {
        return (
            <div>
                {this.state.data}
            </div>
        );
    }
}

export default test;