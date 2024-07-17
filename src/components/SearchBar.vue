<script>
  import axios from 'axios';
  import { store } from "/src/store.js";
  

  export default {
    data () {
      return {
        store,
      }
    },

    methods: {
      sendString() {
        try {
          window.csrfToken = document.querySelector('meta[name="csrf-token"]').content;
          axios.post("http://127.0.0.1:8000/api/apartments/send-location", {
            _token: csrfToken,
            myLocation : this.store.location,
          },
        ).then((resp)=> {console.log(resp);});
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
</script>

<template>
    <form method="POST" class="form-inline my-2 my-lg-0 d-flex">
      <input v-model="this.store.location" id="location" class="form-control mr-sm-2" type="search" placeholder="Inserisci la tua destinazione" aria-label="Search" required>
      <router-link :to="{ name: 'results' }" ><button id="search-btn" class="btn btn-outline-success my-2 my-sm-0" @click="sendString" type="submit">Cerca</button></router-link>
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