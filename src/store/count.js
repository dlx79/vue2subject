export default {
    namespaced:true,
    
    actions:{
        jiaOdd(context,value){
            if(context.state.sum%2){
                context.commit('JIA',value)
            }
        
        },
        jiaWait(context,value){
            setTimeout(()=>{
                context.commit('JIA',value)
            },500)
    
        }
    },
    mutations:{
        JIA(state,value){
            console.log('mutations中的jia被调用了',state,value)
            state.sum+=value
    
        },
        JIAN(state,value){
            state.sum-=value
        }
        
    },
    state:{

        sum:20,
        school:"shanggui",
        subject:"Vue",
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    }

}