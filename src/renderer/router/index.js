import Vue from 'vue'
import Router from 'vue-router'
import {LoadingBar} from "iview"
Vue.use(Router)

const router= new Router({
    routes: [
        {
            path:'/',
            redirect:"/editor",
        },
        {
            path: '/editor',
            name: 'md-editor',
            component:(resolve) => require(['@/pages/mdEditor'], resolve)
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})


router.beforeEach((to,from,next)=>{
    LoadingBar.start()
    next()
})
router.afterEach((to,from)=>{
    LoadingBar.finish()
})

export default router

