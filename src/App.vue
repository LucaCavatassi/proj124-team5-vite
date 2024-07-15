
<script>
import axios from "axios"
import AppNavBar from "./components/AppNavbar.vue"
export default {
  components: {
    AppNavBar
  },
}

</script>

<template>
  <AppNavBar/>
  <router-view></router-view>
</template>

<style>
</style>