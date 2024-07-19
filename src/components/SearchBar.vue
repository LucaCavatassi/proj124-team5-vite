<script>
  import { store } from "/src/store.js";
  

  export default {
    data () {
      return {
        store,
        userInput: "",
      }
    },

    methods: {
      submitData() {
        if (this.userInput.trim() !== '') {
          this.$router.push({ path: '/results', query: { q: this.userInput } });
        } else {
          alert('Please enter a search term');
        }
      },
    },
  }
</script>

<template>
    <form method="POST" class="form-inline my-lg-2 py-2 px-lg-5 my-lg-0 d-flex">
      <input v-model="userInput" id="location" class="form-control mr-sm-2 me-md-4 py-lg-2" type="search" placeholder="Inserisci la tua prossima destinazione..." aria-label="Search" required>
      <button id="search-btn" class="btn btn-outline-success py-2" @click="submitData">Cerca</button>
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

  .form-control:focus {
      box-shadow: 0px 0px 10px 0.25rem #FE5D26 ;
  }
</style>