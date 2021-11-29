import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    //所有路由
    routes:[
        {
            path: '/',
            redirect:'/msite'
        },
        {
            path:'/profile',
            component: () => import('../pages/Profile/Profile'),
            meta:{
                showFooter:true
            }
        },
        {
            path:'/msite',
            component: () => import('../pages/MSite/MSite'),
            meta:{
                showFooter:true
            }
        },
        {
            path:'/order',
            component: () => import('../pages/Order/Order'),
            meta:{
                showFooter:true
            }
        },
        {
            path:'/search',
            component: () => import('../pages/Search/Search'),
            meta:{
                showFooter:true
            }
        },
        {
            path:'/login',
            component: () => import('../pages/Login/Login')
        },
    ]
})
