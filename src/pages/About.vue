<template>
  <div>
    我是about组件啊
  </div>
</template>

<script>
export default {
    name:"About",
    beforeDestroy(){
        console.log('我是about组件 要销毁了')
    },
    
    mounted(){
        console.log('this---',this)

    },
    beforeRouteEnter(to,from,next){
      console.log('about--beforeRouteEnter',to,from)
      
      if(to.meta.isAuth){
        if(localStorage.getItem('school')==='lixiang'){
          next()
        }else{
          alert('学校名字不对')
        }

      }else{
        next()
      }

    },

    beforeRouteLeave(to,from,next){
      console.log('about---beforeRouteLeave',to,from)
      next()
    }


}
</script>

<style>

</style>