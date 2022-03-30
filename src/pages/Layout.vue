<script>
export default {
  name:'Layout',
  // inheritAttrs: ,
  // customOptions: {}
}
</script>

<script setup>
// import AppTopnav from '@/components/app-topnav.vue'
</script>

<template>
  <AppTopnav/>
  <AppHeader/>
  <main>
<!--二级路由-->
    <router-view/>
  </main>
  <footer>底部</footer>
</template>
