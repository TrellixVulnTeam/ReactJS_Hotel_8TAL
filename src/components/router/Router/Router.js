import Home from '../Home/Home';
import Services from '../Services/Services';
import About from '../About/About';
import Rooms from '../Rooms/Rooms';
import Reservation from '../Reservation/Reservation';
import Gallery from '../Gallery/Gallery';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Contact from '../Contact/Contact'
import React from 'react';
import Pool from  '../pool/pool';
import Spa from '../Spa/Spa'
import Restaurant from '../Restauran/Restaurant';
const Routes = [
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
        path: '/services',
        exact: true,
        main: () => < Services />

    }
    ,
    {
        path: '/reservation',
        exact: true,
        main: () => < Reservation />

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

    },
    {
        path: '/pool',
        exact: true,
        main: () => < Pool />

    },
    {
        path: '/restaurant',
        exact: true,
        main: () => < Restaurant />

    },
    {
        path: '/spa',
        exact: true,
        main: () => < Spa />

    }
]

export default Routes;