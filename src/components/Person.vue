<template>
  <div>
    <h2>人员名字</h2>
    <h2 style="color:red">count组件的和为{{sum}}</h2>
    <h2 style="color:red">person组件第一个名字{{firstPersonName}}</h2>
    <input type="text" placeholder="请输入名字" v-model="name" >
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonServer">随机添加一个人</button>
    <ul>
        <li v-for="(p,index) in personList" :key="index">
          {{p.name}}</li>
    </ul>

  </div>
</template>

<script>
import {mapState}from 'vuex'
import {nanoid} from 'nanoid'
export default {
    name:'Person',
    computed:{
        // personList(){
        //     return this.$store.state.personList
        // },
        // sum(){
        //   return this.$store.state.countAbout.sum
        // },
        ...mapState('personAbout',['personList']),
        ...mapState('countAbout',['sum']),
        firstPersonName(){
          return this.$store.getters['personAbout/firstPersonName']
        }

    },
    data(){
        return {
            name:""
        }
    },
    methods:{
       add(){
        if(this.name==''){
            confirm('不能为空')
            return 
        }

          const personObj={id:nanoid(),name:this.name}
          this.$store.commit('personAbout/ADD_PERSON',personObj)
          this.name=''
      },
      addWang(){
        const personObj={id:nanoid(),name:this.name}
        this.$store.dispatch('personAbout/addPersonWang',personObj),
        this.name=''

      },
      addPersonServer(){

        this.$store.dispatch('personAbout/addPersonServer')


      }
    }

}
</script>

<style>

</style>