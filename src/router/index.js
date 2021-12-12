import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes:[

        {path:'/', component:() =>import('@/views/login/Login')},

        //配置登录成功页面，使用时需要使用 path 路径来实现跳转
        { path: '/success', component: () => import('@/views/success')},

         //配置登录失败页面，使用时需要使用 path 路径来实现跳转
        { path: '/error', component: () => import('@/views/error'), hidden: true },

        {path:'/login', component:() =>import('@/views/login/Login')},

        {path:'/registerInfo', component:() =>import('@/views/login/Login')},

        {path:'/home', component:() =>import('@/views/Home'), children:[
            {path:'/menuList', component:() =>import('@/views/menu/Menu')},
            {path:'/deptList', component:() =>import('@/views/dept/Dept')},
            {path:'/classxList', component:() =>import('@/views/classx/Classx')},
            {path:'/noticeList', component:() =>import('@/views/notice/Notice')},
            {path:'/roleList', component:() =>import('@/views/role/Role')},
            {path:'/staticList', component:() =>import('@/views/static/Static')},
            {path:'/studentList', component:() =>import('@/views/student/Student')},
            {path:'/teacherList', component:() =>import('@/views/teacher/Teacher')},
            {path:'/welcome', component:() =>import('@/views/welcome')}
        ],
            redirect:'/welcome'
        },
        {path:'*', component:() =>import('@/views/NotFound')}
    ]
})