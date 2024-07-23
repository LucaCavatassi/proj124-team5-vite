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
          this.$router.push({ path: '/results', query: { q: this.userInput, firstSearch: true } });
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
    --bs-btn-hover-border-color: #ffffff;
    --bs-btn-active-bg: #FE5D26;
    --bs-btn-active-border-color: #FE5D26;
    --bs-btn-disabled-color: #FE5D26;
    --bs-btn-disabled-border-color: #FE5D26;
    --bs-btn-background-color: #FE5D26;
    font-weight: bold;
    color: white;
    background-color: #FE5D26;
  }

  .form-control:hover {
    box-shadow: 20px 20px 50px 15px rgb(255, 255, 255); ;
  }

</style>