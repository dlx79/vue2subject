<template>
  <div>
    我是message组件
    <ul>
        <li v-for="m in messagelist" :key="m.id" >

            <router-link :to="{
                name:'xiangqing',
                query:{
                    id:m.id,
                    title:m.title
                }
                }">{{m.title}} </router-link>
  
                

                <button @click="pushShow(m)"> push查看</button>
                <button @click="replaceShow(m)">replace查看</button>
                <button @click="pushShow(m)" >push按钮</button>
                <button @click="replaceShow(m)">replace按钮</button>

        </li>
        
    </ul>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:"Message",
    data(){
        return{
            messagelist:[
                {id:'001',title:"消息001"},
                {id:'002',title:"消息002"},
                {id:'003',title:"消息003"}
            ]
        }
    },
    mounted(){
        console.log('我是message组件 我是mount',this)
    },
    methods:{
        pushShow(m){
            this.$router.push({
                name:'xiangqing',
                query:{
                    id:m.id,
                    title:m.title
                }
                
            })
        },
        replaceShow(m){
            this.$router.replace({
                name:'xiangqing',
                query:{
                    id:m.id,
                    title:m.title
                }
            })
        }
    }

}
</script>

<style>

</style>