<script>
  import axios from 'axios';
  import { store } from "/src/store.js";
  

  export default {
    data () {
      return {
        store,
        location: "roma",
      }
    },

    methods: {
      submitData() {
        
      axios.post('http://127.0.0.1:8000/api/search/user-input', {
        data: {
          input: "roma"
        }
      })
      .then(response => {
        console.log('Data submitted successfully:', response.data);
      })
      .catch(error => {
        console.error('There was an error submitting the data:', error);
      });
    }
    }
  }
</script>

<template>
    <form method="POST" class="form-inline my-2 my-lg-0 d-flex">
      <input v-model=this.store.location id="location" class="form-control mr-sm-2" type="search" placeholder="Inserisci la tua destinazione" aria-label="Search" required>
      <router-link :to="{ name: 'results' }" ><button id="search-btn" class="btn btn-outline-success my-2 my-sm-0" @click="submitData" type="submit">Cerca</button></router-link>
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