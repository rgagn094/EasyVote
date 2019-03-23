import Vue from 'vue'
import Router from 'vue-router'
import AdminLogin from '../Screens/AdminLogin'
import AdminHome from '../Screens/AdminHome'
import Home from '../Screens/Home'
import CreateElectionForm from '../Screens/CreateElectionForm'
import EditElectionForm from '../Screens/EditElectionForm'
import Election from '../Screens/Election'

// import CreateElectionForm from '../Screens/CreateElectionForm'

Vue.use(Router);

export default new Router({
    routes: [
        {
          path:'/',
          name: 'home',
          component: Home
        },
        {
            path: '/admin/login',
            name: 'adminLogin',
            component : AdminLogin
        },
        {
            path:'/admin/home/:electionBodyID',
            name: 'adminHome',
            component: AdminHome
        },
        {
            path:'/admin/election/create/:electionBodyID',
            name: 'createElectionForm',
            component: CreateElectionForm
        },
        {
            path:'/admin/election/edit/:electionID',
            name: 'editElectionForm',
            component: EditElectionForm
        },
        {
            path:'/admin/election/view/:electionID',
            name: 'viewElection',
            component: Election
        },

    ]
})