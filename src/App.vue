<script>
  export default {
    name:'App',
    // inheritAttrs: ,
    // customOptions: {}
  }
</script>

<script setup>
  import {useStore} from './store'
  import request from './utils/request'
  // store实例
  const store = useStore()

</script>

<template>
<!--一级路由-->
  <router-view/>
</template>

<style>

</style>
