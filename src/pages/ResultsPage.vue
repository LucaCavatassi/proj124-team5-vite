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
            searchResults: [],
            isLoading: false,
            error: null,
            store,

            filters: {
                beds: null,
                bathroom: null,
                rooms: null,
            },

            tempFilters: {
                beds: null,
                bathroom: null,
                rooms: null,
            }
        };
    },

    components: {
        ApartmentCard
    },

    created() {
        this.fetchResults();
    },

    mounted() {
        this.loadFilters();
    },

    methods: {
        fetchResults(query) {
            if (!query) return;

            this.isLoading = true;
            this.error = null;

            axios.get('http://127.0.0.1:8000/api/search', {
                params: { input: query },
            })
            .then(response => {
                this.store.searchResults = response.data;
                console.log("Search Results:", this.store.searchResults["searchResults"]);
                this.isLoading = false;
            })
            .catch(error => {
                this.error = 'There was an error fetching the search results';
                console.error("Error fetching search results:", error);
                this.isLoading = false;
            });
        },

        applyFilters() {
            this.filters = { ...this.tempFilters };
            localStorage.setItem('filters', JSON.stringify(this.filters));
        },

        loadFilters() {
            const savedFilters = localStorage.getItem('filters');
            if (savedFilters) {
                this.filters = JSON.parse(savedFilters);
                this.tempFilters = { ...this.filters };
            }
        }
    },

    computed: {
        filteredApartments() {
            return this.store.searchResults.filter(apartment => {
                const { beds, bathroom, rooms } = this.filters;

                const matchBeds = beds !== null ? apartment.beds >= beds : true;
                const matchBaths = bathroom !== null ? apartment.bathroom >= bathroom : true;
                const matchRooms = rooms !== null ? apartment.rooms >= rooms : true;

                return matchBeds && matchBaths && matchRooms;
            });
        }

    }
}


</script>

<template>
    <div class="container">

        <div v-if="isLoading">Loading...</div>


        <div v-else>
            <div>
                <label>Beds:</label>
                <input type="number" v-model="tempFilters.beds" />
            </div>
            <div>
                <label>Baths:</label>
                <input type="number" v-model="tempFilters.bathroom" />
            </div>
            <div>
                <label>Min Square Meters:</label>
                <input type="number" v-model="tempFilters.rooms" />
            </div>
            <button @click="applyFilters">Apply Filters</button>

            <ul>
                <li v-for="apartment in filteredApartments" :key="apartment.id">
                    {{ apartment.title }} -
                    Beds: {{ apartment.beds }}, Baths: {{ apartment.bathroom }}, Rooms: {{ apartment.rooms
                    }}
                </li>
            </ul>
        </div>


        <!-- <ApartmentCard :store="store" /> -->
    </div>
</template>

<style scoped lang="scss">
@use "../style/general" as *;

.container {
    padding-top: $header-height;
}
</style>
