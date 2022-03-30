<script>
export default {
  name:'Layout',
  // inheritAttrs: ,
  // customOptions: {}
}
</script>

<script setup>
import {onMounted} from "vue";
import {useCategoryStore} from '@/store/category-store.js'
let category = useCategoryStore()

onMounted(() => {
  category.getList()
})
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
