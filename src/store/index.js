import Vue from "vue";

import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'

Vue.use(Vuex)

//求和功能相关的配置
// const countOptions={
//     namespaced:true,
    
//     actions:{
//         jiaOdd(context,value){
//             if(context.state.sum%2){
//                 context.commit('JIA',value)
//             }
        
//         },
//         jiaWait(context,value){
//             setTimeout(()=>{
//                 context.commit('JIA',value)
//             },500)
    
//         }
//     },
//     mutations:{
//         JIA(state,value){
//             console.log('mutations中的jia被调用了',state,value)
//             state.sum+=value
    
//         },
//         JIAN(state,value){
//             state.sum-=value
//         }
        
//     },
//     state:{

//         sum:20,
//         school:"shanggui",
//         subject:"Vue",
//     },
//     getters:{
//         bigSum(state){
//             return state.sum*10
//         }
//     }
// }
//人员功能相关的配置
// const personOptions={
//     namespaced:true,
//     actions:{
//         addPersonWang(context,value){
//             if(value.name.indexOf('王')===0){
//                 context.commit('ADD_PERSON',value)
//             }
            

//         }
//     },
//     mutations:{
        
//         ADD_PERSON(state,value){
//             console.log('mutations中的ADD_PERSON被调用了')
//             state.personList.unshift(value)
    
//         }
//     },
//     state:{
//         personList:[
//             {id:'001',name:'zhangsan',age:'20'},
//             {id:'002',name:'lisi',age:'10'},
//         ]
//     },
//     getters:{
//         firstPersonName(state){
//             return state.personList[0].name
//         }
//     }
// }



//准备actions--用于响应组件中的动作
// const actions={
//     // jia(context,value){
//     //     console.log('actions中的a.b',context ,value)
//     //     context.commit('JIA',value)

//     // },
//     // jian(context,value){
//     //     context.commit('JIAN',value)
//     // },
//     jiaOdd(context,value){
//         if(context.state.sum%2){
//             context.commit('JIA',value)
//         }
    
//     },
//     jiaWait(context,value){
//         setTimeout(()=>{
//             context.commit('JIA',value)
//         },500)

//     }
// }

// //准备mutations--用于操作数据（state）
// const mutations={
//     JIA(state,value){
//         console.log('mutations中的jia被调用了',state,value)
//         state.sum+=value

//     },
//     JIAN(state,value){
//         state.sum-=value
//     },
//     ADD_PERSON(state,value){
//         console.log('mutations中的ADD_PERSON被调用了')
//         state.personList.unshift(value)

//     }
// }

// //准备state--用于存储数据
// const state={
//     sum:20,
//     school:"shanggui",
//     subject:"Vue",
//     personList:[
//         {id:'001',name:'zhangsan',age:'20'},
//         {id:'002',name:'lisi',age:'10'},
//     ]
// }
// //准备getters--用于将state中的数据进行加工
// const getters={
//     bigSum(state){
//         return state.sum*10
//     }

// }

//创建并暴露store

export default new Vuex.Store({
    // actions,
    // mutations,
    // state,
    // getters,
    modules:{
        
        countAbout:countOptions,
        personAbout:personOptions

    }
    
})

