
import React from 'react'
const Home = React.lazy(() => import('./../body/home/home.jsx'));
const Gallery = React.lazy(() => import('./../body/gallery/gallery.jsx'));
const Contact = React.lazy(() => import('./../body/contact/contact.jsx'));
const Rooms = React.lazy(() => import('./../body/room/room.jsx'));
const About = React.lazy(() => import('./../body/about/about.jsx'));
const SignIn = React.lazy(() => import('./../body/SignupForm/signin.jsx'));
const SignUp = React.lazy(() => import('./../body/SignupForm/signup.jsx'));
const Reservation1 = React.lazy(() => import('./../body/reservation/reservation1.jsx'));
const Reservation2 = React.lazy(() => import('./../body/reservation/reservation2'));
const Reservation3 = React.lazy(() => import('./../body/reservation/reservation3'));
const Reservation4 = React.lazy(() => import('./../body/reservation/reservation4'));
const Pool = React.lazy(() => import('./../body/services/pool'));
const Restaurant = React.lazy(() => import('./../body/services/restaurant.jsx'));
const Spa = React.lazy(() => import('./../body/services/spa'));


// import  Home  from './../body/home';
// import  Gallery   from'./../body/gallery';
// import  Contact  from'./../body/contact';
// import  Rooms    from'./../body/room';
// import  About    from'./../body/about';
// import  SignIn   from'./../body/SignupForm/signin';
// import  SignUp    from'./../body/SignupForm/signup';
// import  Reservation1    from'./../body/reservation/reservation1';
// import  Reservation2    from'./../body/reservation/reservation2';
// import  Reservation3 from'./../body/reservation/reservation3';
// import  Reservation4    from'./../body/reservation/reservation4';
// import  Pool   from'./../body/services/pool';
// import  Restaurant    from'./../body/services/restaurant';
// import  Spa    from'./../body/services/spa';

const Routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />

    },
    {
        path: '/',
        exact: true,
        main: () => <Home />

    },
    {
        path: '/room',
        exact: true,
        main: () => <Rooms />

    }
    ,
    {
        path: '/services/pool',
        exact: true,
        main: () => < Pool />

    }
    , {
        path: '/services/restaurant',
        exact: true,
        main: () => < Restaurant />

    }
    , {
        path: '/services/spa',
        exact: true,
        main: () => <Spa/>

    }
    ,
    {
        path: '/reservation/1',
        exact: true,
        main: () => < Reservation1 />

    },

    {
        path: '/reservation/2',
        exact: true,
        main: () => < Reservation2 />

    },
    {
        path: '/reservation/3',
        exact: true,
        main: () => < Reservation3 />

    },
    {
        path: '/reservation/4',
        exact: true,
        main: () => < Reservation4 />

    },
    {
        path: '/gallery',
        exact: true,
        main: () => < Gallery />

    },
    {
        path: '/contact',
        exact: true,
        main: () => < Contact />

    },
    {
        path: '/about',
        exact: true,
        main: () => < About />

    },
    {
        path: '/signIn',
        exact: true,
        main: () => < SignIn />

    },
    {
        path: '/signUp',
        exact: true,
        main: () => < SignUp />

    }
]

export default Routes;