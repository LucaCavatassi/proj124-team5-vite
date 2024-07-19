<script>
    import axios from 'axios';
    import { store } from '../store';
    import ApartmentCard from '../components/ApartmentCard.vue'

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
                store
            };
        },
        components: {
            ApartmentCard
        },
        mounted() {
            this.fetchResults();
        },

        methods: {
            fetchResults(query) {
                if (!query) return;

                this.isLoading = true;
                this.error = null;

                // First Axios call
                axios.get('http://127.0.0.1:8000/api/search', {
                    params: { input: query },
                })
                    .then(response => {
                        this.store.searchResults = response.data;
                        console.log("Search Results:", this.store.searchResults);
                        this.isLoading = false;
                    })
                    .catch(error => {
                        this.error = 'There was an error fetching the search results';
                        console.error("Error fetching search results:", error);
                        this.isLoading = false;
                    });

                axios.get(`http://127.0.0.1:8000/api/apartment/${this.store.searchResults.slug}/address`)
                    .then(response => {
                        this.store.address = response.data;
                        console.log("Address:", this.store.address);
                    })
                    .catch(error => {
                        console.error("Error fetching address:", error);
                    });

            }
        }
    };


</script>

<!-- <template>
    <div class="container">
        <div>
            <h1>Risultati vicino <span>{{ query }}</span></h1>
            <ul>
                <li v-for="result in store.searchResults">{{ result.title }}</li>
            </ul>
            <ApartmentCard :store="store" />

        </div>
    </div>
</template> -->

<template>
    <div class="container">
        <div v-if="isLoading">Loading...</div>
        <div v-else>
            <h1>Risultati vicino <span>{{ query }}</span></h1>
            <div v-if="error">{{ error }}</div>
            <ul v-else>
                <li v-for="result in store.searchResults" :key="result.slug">{{ result.title }}</li>
            </ul>
            <ApartmentCard :store="store" />
        </div>
    </div>
</template>

<style scoped lang="scss"></style>