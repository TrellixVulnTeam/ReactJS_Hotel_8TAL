<<<<<<< refs/remotes/origin/quynh
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

    
=======
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import axios from "axios";
// import {BrowserRouter as Router,Switch,Route, Redirect } from 'react-router-dom'
// import AuthAPI from './authAPI';
// import Cookies from 'js-cookies'

// function Test(){
//     const [auth, setAuth]=React.useState(false);
//     const readCookies=()=>{
//         const user= Cookies.get('user');
//          if(user){
//              setAuth(true);

//          }
//     }
//     React.useEffect(()=>{
//         readCookies();
//     },[ ])
//     return (
//         <div>
//             <AuthAPI.Provider value={{auth,setAuth}}>
//             <h1> Well come</h1>
//             <Router>
//                 <Routes/>
//             </Router>
//             </AuthAPI.Provider>
//         </div>
//     );
// }

// const  Login =()=>{
//     const Auth =React.useContext(AuthAPI)

//     const handleClick=()=>{
//         Auth.setAuth(true);
//         Cookies.set('user','true');

//     }
//     return (
//         <div> 
//             <button onClick={handleClick}> login </button>
//         </div>
//     );
// }
// const  Dash =()=>{
    
//     const Auth =React.useContext(AuthAPI)
//     const logOut =()=>{
//         Auth.setAuth(false);
//         Cookies.remove('user');
//     }
//     return (
//         <div> 
//             <h1> Dash </h1>
//             <button onClick={logOut}> logout </button>
//         </div>
//     );
// }

// const Routes=()=>{
//     const Auth =React.useContext(AuthAPI);
>>>>>>> local

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

<<<<<<< refs/remotes/origin/quynh

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
=======
//     return(
//         <Switch>
//             <RedirectLogin path='/login' component={Login} auth={Auth.auth} ></RedirectLogin>
//             <Protected path='/dash' component={Dash} auth={Auth.auth} ></Protected>
//         </Switch>
//     );
// }

// const Protected=({component:Component,...rest})=>{
//     return(
//        <Route {...rest} 
//        render={()=>auth?(
//            <Component> </Component>
//        ):
//        (
//            <Redirect to='/login'></Redirect>
//        )
//     }
//        >

//        </Route>
//     );
// }
// const RedirectLogin=({component:Component,...rest})=>{
//     return(
//        <Route {...rest} 
//        render={()=>!auth?(
//            <Component> </Component>
//        ):
//        (
//            <Redirect to='/login'></Redirect>
//        )
//     }
//        >

//        </Route>
//     );
// }
// export default Test;
>>>>>>> local
