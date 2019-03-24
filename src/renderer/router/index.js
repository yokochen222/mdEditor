import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router= new Router({
    routes: [
        {
            path:'/',
            redirect:"/editor"
        },
        {
            path: '/editor',
            name: 'md-editor',
            component: require('@/pages/mdEditor').default
        },
        {
            path:"/login",
            name:"md-login",
            component: require('@/pages/mdLogin').default
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})


const {ipcRenderer:ipc} = require('electron')

router.beforeEach((to,from,next)=>{
    // if(to.name=='md-login'){
    //     ipc.send("changeWindow","login")
    // }else{
    //     ipc.send("changeWindow","default")
    // }
    next()
})


export default router

