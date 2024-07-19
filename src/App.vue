
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
      @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');

.container {
        padding-top: 80px;
        font-family: "Quicksand", Arial, Helvetica, sans-serif;
    }
</style>