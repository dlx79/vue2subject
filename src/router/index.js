// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'


//创建并暴露一个路由器
const router= new VueRouter({
    mode:'history',
    routes:[
        {
            name:"guanyu",
            path:"/about",
            component:About,
            meta:{isAuth:true}
        },
        {
            name:"zhuye",
            path:"/home",
            component:Home,
            meta:{isAuth:true},

            children:[
                {
                    name:"xinwen",
                    path:"news",
                    component:News,
                    meta:{isAuth:true},
                    // beforeEnter:(to, from,next)=>{

                    //     if(to.meta.isAuth){
                    //         if(localStorage.getItem('school')==='lixiang'){
                    //             next()
                    //         }else{
                    //             alert('缓存值不对')
                    //         }
                    //     }else{
                    //         next()
                    //     }

                    // }
                },
                {
                    name:"xiaoxi",
                    path:"message",
                    component:Message,
                    meta:{isAuth:true},
                    children:[
                        {   
                            name:"xiangqing",
                            path:"detail",
                            component:Detail,

                            props($route){
                                return{
                                    id:$route.query.id,
                                    title:$route.query.title,
                                    a:1,
                                    b:9000

                                    

                            }
                        }

                        }
                    ]
                }
            ]
        },

    ]
})
// 全局前置路由守卫---初始化的时候被调用、每次路由切换之前被调用
// router.beforeEach((to,from,next)=>{
//     console.log('前置路由守卫to',to)
//     if(to.meta.isAuth){
//         if(localStorage.getItem('school')==='lixiang'){
//             next()
//         }else{
//             alert('缓存值不对')
//         }
//     }else{
//         next()
//     }

// }),
// router.afterEach((to,from)=>{
//     console.log('后置路由守卫',to)
//     console.log('后置路由守卫',from)
    
// })

//




export default router