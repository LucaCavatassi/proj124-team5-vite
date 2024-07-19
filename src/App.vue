
<script>
import axios from "axios"
import AppNavBar from "./components/AppNavbar.vue"
import AppFooter from "./components/AppFooter.vue"

export default {
  components: {
    AppNavBar,
    AppFooter
  },
}

</script>

<template>
  <AppNavBar/>
  <router-view></router-view>
  <AppFooter/>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
  * {
    font-family: "Quicksand", Arial, Helvetica, sans-serif;
  }

  router-view {
    .container {
            padding-top: 80px;
        }
  }
</style>