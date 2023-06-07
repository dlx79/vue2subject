<template>
  <div class="row">
    <div class="col-xs-offset-2 col-xs-8">
      <button @click="forward">前进啊</button>
      <button @click="back">后退啊</button>
      <div class="page-header"><h2>Vue Router Demo</h2></div>
    </div>
  </div>
</template>

<script>
export default {
    name:"Banner",
    methods:{
      forward(){
        this.$router.forward()
      },
      back(){
        this.$router.back()
      }
    }

}
</script>

<style>


</style>