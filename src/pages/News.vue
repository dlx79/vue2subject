<template>
  <div>
    <ul>
      <li>news001</li><input type="text">
      <li>news002</li><input type="text">
      <li>news003</li><input type="text">
    </ul>
  </div>
</template>

<script>
export default {
    name:"News",
    beforeDestroy(){
      console.log('news即将销毁')
    },
    activated(){
      console.log('new组件被激活了')
    },
    deactivated(){
      console.log('new组件失活了')
    }

}
</script>

<style>

</style>