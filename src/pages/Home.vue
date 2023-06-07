<template>
  <div>
    我是home组件啊
    <div>
        <ul>
            <li>
                <router-link replace class="list-group-item" active-class="active" to="/home/news"> News按钮</router-link>
            </li>
            <li>
                <router-link replace class="list-group-item" active-class="active" to="/home/message">Message按钮</router-link>
            </li>
        </ul>
        <!-- 指定组件的呈现位置 -->
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        
    </div>
  </div>
</template>

<script>
export default {
    name:"Home"

}
</script>

<style>

</style>