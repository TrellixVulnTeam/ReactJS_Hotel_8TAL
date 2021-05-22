import Home from './components/home'
import About from './components/about'
import Topics from './components/topics'

const routes=[
    {
        path:'/',
        exact:true ,
        main:()=><Home/>
    },
    {
        path:'/about',
        exact:true, 
        main:()=><About/>
    },
    {
        path:'/topics',
        exact: true ,
        main:()=><Topics/>
    }
]

export default routes;