import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router= new Router({
    routes: [
        {
            path:'/',
            redirect:"/editor",
            meta:{
                title:"MDEDITOR",
                keepAlive:false
            }
        },
        {
            path: '/editor',
            name: 'md-editor',
            meta:{
                title:"MDEDITOR",
                keepAlive:true
            },
            component: require('@/pages/mdEditor').default
        },
        {
            path: '/login',
            name: 'md-login',
            meta:{
                title:"MDEDITOR-LOGIN",
                keepAlive:false
            },
            component: require('@/pages/mdLogin').default
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})


import store from "@/store"
router.beforeEach((to,from,next)=>{
   
    if(to.path=="/editor"){
        store.commit("Editor/addOpenedRoutes",{
            path:to.fullPath,
            query:to.query,
            title:to.query.fileName||"Untitled"
        })
    }
    next()
})


export default router

