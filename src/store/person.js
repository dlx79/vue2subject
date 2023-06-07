
import {nanoid} from 'nanoid'
import axios from 'axios'

export default {
    namespaced:true,
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf('王')===0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('添加的人必须是王')
            }
        },
        addPersonServer(context){
            axios.get('http://localhost:8080/').then(
             response=>{
                context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
             },
             error=>{
                alert(error.message)
             }   
            )

        }

    },
    mutations:{
        
        ADD_PERSON(state,value){
            console.log('mutations中的ADD_PERSON被调用了')
            state.personList.unshift(value)
    
        }
    },
    state:{
        personList:[
            {id:'001',name:'zhangsan',age:'20'},
            {id:'002',name:'lisi',age:'10'},
        ]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}