<template>
  <div>
    <ul>
        <li>标题编号:{{ id  }}</li>
        <li>标题头：{{title}}</li>
        <li>{{ b }}</li>

    </ul>
  </div>
</template>

<script>
export default {
    name:"Deatil",
    props:['id','title','a','b'],
    
    mounted(){
        console.log('this--detail--',this.$route)
    }

}
</script>

<style>

</style>