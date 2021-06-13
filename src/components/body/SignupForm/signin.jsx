import React, { Component } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import './style.scoped.css'
import axios from 'axios';
import url from './../../../config'
import { data, event } from 'jquery';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'

//import { useCookies }    from 'react-cookie'
class signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            redirect:false,
            role:''
        }
        localStorage.removeItem('id_user');
        localStorage.setItem('login','false');

    }
    //  setCookie= (values)=> {
    //     const [cookies, setCookie] = useCookies(['access_token', 'refresh_token'])
    //     let expires = new Date()
    //     expires.setTime(expires.getTime() + (30*60* 1000))
    //     setCookie('access_token', response.data.access_token, { path: '/',  expires})
    //     setCookie('status', response.data.refresh_token, {path: '/', expires})
    
    //     // ...
    // }
    //////heckSignIn(){{user_id)
    checkSignIn = (event) => {
        event.preventDefault();
        
        axios({
            method: 'GET',
            url: url+'/checklogin?email='+this.state.email+'&password='+this.state.password,
        
        }).then(res => {
            // this.setState({
            //     email: this.state.email,
            //     passWord: this.state.password
            //     // let form = new FormData;
            //     // form.append('email', this.state.email);
            //     // form.append('password', this.state.passsWord);//ok ro
            // })
            console.log(res.data.message)
            if (res.data.message === "OK") {
                localStorage.setItem("id_user",res.data.id_user);
              this.setState({role:res.data.role,redirect:true})
              localStorage.setItem("login","true");

             }
            else {
                //console.log(data.data.message);
                alert(" Đăng Nhập sai mật khẩu ")
            }

        }).catch(err => {
            console.log(err);
        });
    }


    /////// heckSignIn(){
    myhandleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value });
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
    }
    routeControl(){
        if(this.state.role=="admin"){
           return <Redirect to='/admin'/>
        }
        if(this.state.role=="provider"){
            return <Redirect to='/provider'/>
        }if(this.state.role=="user"){
            return <Redirect to='/home'/>
        }
    }
    
    render() {
          
        return (

            <div>
                {this.state.redirect?this.routeControl():null}
                <button className="header">
                    <Link to='/home' >Home</Link>
                </button>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 offset-md-4 form login-form">
                            <form>
                                <h2 className="text-center">Login Form</h2>
                                <div className="form-group">
                                    <input className="form-control" type="email" name="email" onChange={this.myhandleChange} placeholder="Email Address" required />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="password" name="password" onChange={this.myhandleChange} placeholder="Password" required />
                                </div>
                                <div className="link forget-pass text-left"><a href="forgot-password.php">Forgot password?</a></div>
                                <div className="form-group">
                                    <input className="form-control button" type="button" onClick={this.checkSignIn} name="signin" defaultValue="Signin" />
                                </div>
                                <div className="link login-link text-center">Not yet a member? <Link>Signup now</Link></div> 
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}//quen sua lon cho roi đo
// ok tao sai , làm tiếp vạy you sai not me
export default signin;