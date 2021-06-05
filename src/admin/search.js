import React, { Component } from 'react';
import './assets/css/animate.scoped.css'
import './assets/css/sidebar-menu.scoped.css'
import './assets/css/adminstyle.scoped.css'
import axios from 'axios';
import MenuBar from './menubar';
import editRoom from './editRoom';
import Header from './header'
import url from '../config'
import { BrowserRouter as Router, Route, Link,NavLink, Switch } from "react-router-dom";
import Creatable from 'react-select/creatable';
class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }

    componentDidMount() {
        axios.get(url+"/rooms").then(res => {
            this.setState({ data: res.data })
        })
    }

    render() {
        var { isLoaded, data, roleFilter, searchString } = this.state;
        let text = data;
        if (searchString) {
            text = text.filter(info => info.role.toLowerCase().match(searchString));
        }
        return (
            <div>
        <select onChange={this.handleChange} value={value}>
                {options.map(item => (
                    <option key={item.value} value={item.value}>
                    {item.name}
                 </option>
                ))}
            </select>
            </div>
        );
    }
}
export default Hello;
// ReactDOM.render(
//     <Hello name="World" />,
//     document.getElementById('container')
// );