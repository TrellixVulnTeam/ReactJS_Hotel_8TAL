
import React from 'react'
const Home = React.lazy(() => import('../body/home'));
const Gallery = React.lazy(() => import('../body/gallery'));
const Contact = React.lazy(() => import('../body/contact'));
const Rooms = React.lazy(() => import('../body/room'));
const About = React.lazy(() => import('../body/about'));
const SignIn = React.lazy(() => import('../body/SignupForm/signin'));
const SignUp = React.lazy(() => import('../body/SignupForm/signup'));
const Reservation1 = React.lazy(() => import('../body/reservation/reservation1'));
const Reservation2 = React.lazy(() => import('../body/reservation/reservation2'));
const Reservation3 = React.lazy(() => import('../body/reservation/reservation3'));
const Reservation4 = React.lazy(() => import('../body/reservation/reservation4'));
const Pool = React.lazy(() => import('../body/services/pool'));
const Restaurant = React.lazy(() => import('../body/services/restaurant'));
const Spa = React.lazy(() => import('../body/services/spa'));



;
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
        main: () => < Spa />

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