<template>
  <div id="app">
    <tabbar v-model="active" v-if="$route.meta.tabbarShow" @change="tabbarChange">
      <tabbar-item to="/" icon="home-o">首页</tabbar-item>
      <tabbar-item to="/about" icon="search">搜索</tabbar-item>
      <tabbar-item to="/recording" icon="friends-o">记录</tabbar-item>
      <tabbar-item to="/setting" icon="setting-o">设置</tabbar-item>
    </tabbar>
    <router-view />
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant'

export default {
  components: { Tabbar, TabbarItem },
  data () {
    return {
      active: 0
    }
  },

  created () {
    const path = window.location.pathname
    if (path.indexOf('/about') !== -1) {
      this.active = 1
    }
    if (path.indexOf('/recording') !== -1) {
      this.active = 2
    } if (path.indexOf('/setting') !== -1) {
      this.active = 3
    }
  },
  methods: {
    tabbarChange () {
      console.log(this.active)
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
