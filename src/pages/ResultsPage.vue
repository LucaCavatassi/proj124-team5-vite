<script>
import axios from 'axios';

export default {
    props: ["query"],
    name: "ResultsPage",
    watch: {
        query: {
            immediate: true,
            handler(newQuery) {
                this.fetchResults(newQuery);
            }
        }
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

            axios.get('http://127.0.0.1:8000/api/search', {
                params: { input: query },
            })
            .then(response => {
                this.searchResults = response.data;
                console.log(this.searchResults);
                this.loading = false;
            })
            .catch(error => {
                this.error = 'There was an error fetching the data';
                this.loading = false;
            });
        },
    },
}


</script>

<template>
    <div class="container">
        <div>
            <h1>Risultati vicino <span>{{ query }}</span></h1>
            <ul>
                <li v-for="result in searchResults">{{ result.title }}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>