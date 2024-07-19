<script>
import axios from "axios";

export default {
  props: ["query"],
  name: "ResultsPage",
  watch: {
    query: {
      immediate: true,
      handler(newQuery) {
        this.fetchResults(newQuery);
      },
    },
  },
  data() {
    return {
      isLoading: false,
      searchResults: [],
      error: null,
    };
  },
  mounted() {
    this.fetchResults();
  },
  methods: {
    fetchResults(query) {
      if (!query) return;

      this.loading = true;
      this.error = null;

      axios
        .get("http://127.0.0.1:8000/api/search", {
          params: { input: query },
        })
        .then((response) => {
          this.searchResults = response.data;
          console.log(this.searchResults);
          this.loading = false;
        })
        .catch((error) => {
          this.error = "Si è verificato un errore durante il recupero dei dati";
          this.loading = false;
        });
    },
    fetchData() {
            axios.get('http://127.0.0.1:8000/api/filter',{
                params: {
                    beds: 5,
                    rooms: 3,
                    bathroom: 2,
                    square_mt: 75
                } 
            })
                .then(response => {
                    console.log(response.data);
                    // Gestisci i dati qui
                    this.searchResults = response.data;
                })
                .catch(error => {
                    console.error('Errore nella chiamata:', error);
                });
        }
  },
};
</script>

<template>
  <div class="container">
    <div>
      <h1>
        Risultati vicino <span>{{ query }}</span>
      </h1>
      <div>
        <button @click="fetchData">Clicca per ottenere dati</button>
      </div>
      <ul>
        <li v-for="result in searchResults" :key="result">{{ result.title }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
