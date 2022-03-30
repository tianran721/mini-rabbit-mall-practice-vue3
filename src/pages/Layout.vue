<script>
export default {
  name:'Layout',
  // inheritAttrs: ,
  // customOptions: {}
}
</script>

<script setup>
// import AppTopnav from '@/components/app-topnav.vue'
import AppFooter from "@/components/app-footer";
</script>

<template>
  <AppTopnav/>
  <AppHeader/>
  <main>
<!--二级路由-->
    <router-view/>
  </main>
  <AppFooter/>
</template>
