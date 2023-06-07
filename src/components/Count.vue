<template>
  <div>
    <h2>当前的求和为:{{sum}}</h2>
    <h2>当前的求和放大10倍为:{{bigSum}}</h2>
    <h3>我在{{school}},学习{{subject}}</h3>
    <h2 style="color:red">当前人名list的总人数是{{personList.length}}</h2>

    <select  v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前和为奇数在加</button>
    <button @click="incrementWait(n)">等等在加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    name:"Count",
    data(){
        return{
            n:1
        }
    },
    computed:{
        // he(){
        //     return this.$store.state.sum
        // },
        // sum(){
        //     return this.$store.state.sum
        // },
        
        
        // xuexiao(){
        //     return this.$store.state.school
        // },
        // school(){
        //     return this.$store.state.school
        // },
        // kemu(){
        //     return this.$store.state.subject
        // },
        // subject(){
        //     return this.$store.state.subject
        // },
        //以上部分等同下面，mapstate
        //...是把引入函数 把数据放入mapstate
        //借助mapState生成计算属性，从state中读取数据。（对象写法）
        // ...mapState({he:'sum',xuexiao:'school',kemu:'subject'}),
        //借助mapState生成计算属性，从state中读取数据。（数组写法）对象名和数组名要一致
        ...mapState('countAbout',['sum','school','subject']),
        ...mapState('personAbout',['personList']),

    //************************************************************* */
        // bigSum(){
        //     return this.$store.getters.bigSum
        // },
//借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
    ...mapGetters('countAbout',{bigSum:"bigSum"}),
    // 借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
    // ...mapGetters(['bigSum'])
    },
    
    methods:{
        // increment(){
        //     this.$store.commit('JIA', this.n);

        // },
        // decrement(){
        //     this.$store.commit('JIAN',this.n)

        // },
        //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
        ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
 //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
			// ...mapMutations(['JIA','JIAN']),

        // incrementOdd(){
        //     if(this.$store.state.sum%2){
        //         this.$store.dispatch('jiaOdd', this.n);
        //     }

        // },
        // incrementWait(){
        //     setTimeout(()=>{
        //         this.$store.dispatch('jiaWait',this.n)
        //     },500)
            
        // },
        ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
    },
    mounted(){
        console.log('mount::',this.$store.getters.bigSum) //100
    }

}
</script>

<style>

</style>