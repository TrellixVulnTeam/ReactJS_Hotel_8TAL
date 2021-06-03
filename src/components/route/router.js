
import React from 'react'
const Home = React.lazy(() => import('./../body/home/home.jsx'));
const Gallery = React.lazy(() => import('./../body/gallery/gallery.jsx'));
const Contact = React.lazy(() => import('./../body/contact/contact.jsx'));
const Rooms = React.lazy(() => import('./../body/room/room.jsx'));
const About = React.lazy(() => import('./../body/about/about.jsx'));
const SignIn = React.lazy(() => import('./../body/SignupForm/signin.jsx'));
const SignUp = React.lazy(() => import('./../body/SignupForm/signup.jsx'));
const Reservation1 = React.lazy(() => import('./../body/reservation/reservation1.jsx'));
const Reservation2 = React.lazy(() => import('./../body/reservation/reservation2.js'));
const Reservation3 = React.lazy(() => import('./../body/reservation/reservation3'));
const Reservation4 = React.lazy(() => import('./../body/reservation/reservation4'));
const Pool = React.lazy(() => import('./../body/services/pool'));
const Restaurant = React.lazy(() => import('./../body/services/restaurant.jsx'));
const Spa = React.lazy(() => import('./../body/services/spa'));

const BookingAdmin = React.lazy(() => import('../../admin/booking'));
const EditAdmin = React.lazy(() => import('../../admin/edit'));
const EditRoomAdmin = React.lazy(() => import('../../admin/editRoom'));
const EditUserAdmin = React.lazy(() => import('../../admin/editUser'));
const EditBookingAdmin = React.lazy(() => import('../../admin/editBooking'));
const LoginAdmin = React.lazy(() => import('../../admin/signup-form/login'));
const NewPassAdmin = React.lazy(() => import('../../admin/signup-form/newPassword'));
const ForgotPassAdmin = React.lazy(() => import('../../admin/signup-form/forgotPassword'));
const SignUpAdmin = React.lazy(() => import('../../admin/signup-form/signup'));
const ResetCodeAdmin = React.lazy(() => import('../../admin/signup-form/resetCode'));
const PassworChangedAdmin = React.lazy(() => import('../../admin/signup-form/passwordChanged'));

const Admin = React.lazy(() => import('../../admin/index'));
const UsersAdmin= React.lazy(() => import('../../admin/users'));
const RoomAdmin = React.lazy(() => import('../../admin/rooms'));
const AddRoomAdmin = React.lazy(() => import('../../admin/addRoom'));




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
        path: '/home',
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
        path: '/pool',
        exact: true,
        main: () => < Pool />

    }
    , {
        path: '/restaurant',
        exact: true,
        main: () => < Restaurant />

    }
    , {
        path: '/spa',
        exact: true,
        main: () => <Spa/>

    }
    ,
    {
        path: '/reservation1',
        exact: true,
        main: () => < Reservation1 />

    },

    {
        path: '/reservation2',
        exact: true,
        main: () => < Reservation2 />

    },
    {
        path: '/reservation3',
        exact: true,
        main: () => < Reservation3 />

    },
    {
        path: '/reservation4',
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

    },
    {
        path: '/bookingAdmin',
        exact: true,
        main: () => < BookingAdmin />

    },  {
        path: '/editAdmin',
        exact: true,
        main: () => < EditAdmin />

    },  {
        path: '/editBookingAdmin/:id_book/editBooking',
        exact: true,
        main: ({match}) => < EditBookingAdmin match={match}/>

    },  {
        path: '/editRoomAdmin/:id_room/editRoom',
        exact: true,
        main: ({match}) => < EditRoomAdmin match={match} />

    },  {
        path: '/editUserAdmin/:id/editUser',
        exact: true,
        main: ({match,history}) => < EditUserAdmin match={match}history={history}/>

    },  {
        path: '/loginAdmin',
        exact: true,
        main: () => <LoginAdmin  />

    },  {
        path: '/newpassAdmin',
        exact: true,
        main: () => < NewPassAdmin />

    },  {
        path: '/forgotpassAdmin',
        exact: true,
        main: () => < ForgotPassAdmin />

    },  {
        path: '/signupAdmin',
        exact: true,
        main: () => < SignUpAdmin />

    },  {
        path: '/resetCodeAdmin',
        exact: true,
        main: () => < ResetCodeAdmin />

    },  {
        path: '/passwordChangeAdmin',
        exact: true,
        main: () => < PassworChangedAdmin />

    },  {
        path: '/admin',
        exact: true,
        main: () => < Admin />

    },  {
        path: '/usersAdmin',
        exact: true,
        main: () => < UsersAdmin />

    },  {
        path: '/roomsAdmin',
        exact: true,
        main: () => < RoomAdmin />

    },  
    {
        path: '/addRoomAdmin',
        exact: true,
        main: () => < AddRoomAdmin />

    }

]

export default Routes;