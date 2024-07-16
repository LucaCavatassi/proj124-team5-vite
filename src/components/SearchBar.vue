<script>
  import axios from 'axios';
  export default {
    data () {
      return {
        inputLocation: "ciao",
      }
    },

    methods: {
      sendData() {
        axios.post("http://127.0.0.1:8000/api/apartments/search", ((resp)=> {
          console.log(resp);
        }))
      }
    }
  }
</script>

<template>
    <form class="form-inline my-2 my-lg-0 d-flex">
      <input v-model="inputLocation" class="form-control mr-sm-2" type="search" placeholder="Inserisci la tua destinazione" aria-label="Search" required>
      <router-link :to="{ name: 'results', params: {location: inputLocation} }" id="search-btn" class="btn btn-outline-success my-2 my-sm-0" type="submit">Cerca</router-link>
    </form>
</template>

<style scoped lang="scss">
    @use "../style/partials/palette" as *;


  .btn-outline-success {
    --bs-btn-color: #FE5D26;
    --bs-btn-border-color:#FE5D26;
    --bs-btn-hover-bg: #FE5D26;
    --bs-btn-hover-border-color: #FE5D26;
    --bs-btn-active-bg: #FE5D26;
    --bs-btn-active-border-color: #FE5D26;
    --bs-btn-disabled-color: #FE5D26;
    --bs-btn-disabled-border-color: #FE5D26;
  }
</style>