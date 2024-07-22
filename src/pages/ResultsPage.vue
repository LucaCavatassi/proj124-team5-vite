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
                imgBaseUrl: 'http://127.0.0.1:8000/storage',

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
                        // console.log("Search Results:", this.store.searchResults["searchResults"]);
                        this.isLoading = false;
                    })
                    .catch(error => {
                        this.error = "C'é stato un errore nel caricare i dati. ";
                        // console.error("Error fetching search results:", error);
                        this.isLoading = false;
                    });
            },

            applyFilters() {
                this.filters = { ...this.tempFilters };
                localStorage.setItem('filters', JSON.stringify(this.filters));
            },

            loadFilters() {
                const query = this.$route.query;
                console.log(query.firstSearch);

                // If initialSearch flag is present, do not load filters from local storage
                if (query.firstSearch) {
                    this.filters = {
                        beds: null,
                        bathroom: null,
                        rooms: null,
                    };
                    this.tempFilters = { ...this.filters };
                } else {
                    // Otherwise, load from local storage
                    const savedFilters = localStorage.getItem('filters');
                    if (savedFilters) {
                        this.filters = JSON.parse(savedFilters);
                        this.tempFilters = { ...this.filters };
                    }
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
            <!-- FILTERS -->
            <div class="row">
                <div class="col-3">
                    <label for="beds">Letti: </label>
                    <input id="beds" type="number" v-model="tempFilters.beds" />
                </div>

                <div class="col-3">
                    <label for="bathroom">Bagni:</label>
                    <input id="bathroom" type="number" v-model="tempFilters.bathroom" />
                </div>

                <div class="col-3">
                    <label for="rooms">Stanze: </label>
                    <input id="rooms" type="number" v-model="tempFilters.rooms" />
                </div>
                <div class="col-3">
                    <button @click="applyFilters">Apply Filters</button>
                </div>
            </div>


            <!-- CARDS -->
            <div class="row">
                <h1> Ecco cosa abbiamo trovato vicino {{ query }}</h1>
                <div class="card col-sm-12 col-md-6 col-lg-4 mb-4" v-for="apartment in filteredApartments"
                    style="width: 18rem;">
                    <img :src="`${imgBaseUrl}/${apartment.img_path}`" class="card-img-top" alt="Apartment Image"
                        v-if="apartment.img_path">
                    <img src="https://t3.ftcdn.net/jpg/05/52/37/18/360_F_552371867_LkVmqMEChRhMMHDQ2drOS8cwhAWehgVc.png"
                        alt="Default Image" v-else>
                        
                    <div class="card-body">
                        <h5 class="card-title">{{ apartment.title }}</h5>
                        <p class="card-text small">{{ apartment.apartment_description }}</p>
                        <ul>
                            <li>
                                Letti: {{ apartment.beds }}, Bagni: {{ apartment.bathroom }}, Stanze: {{ apartment.rooms
                                }}
                            </li>
                        </ul>
                        <router-link :to="{ name: 'single-result', params: { slug: apartment.slug } }"
                            class="btn btn-primary">Dettagli</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use "../style/general" as *;

    .container {
        padding-top: $header-height;
    }


    .card {
        border: none;
        transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
        overflow: hidden;
        border-radius: 20px;
        min-height: 450px;
        box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);

        @media (max-width: 768px) {
            min-height: 350px;
        }

        @media (max-width: 420px) {
            min-height: 300px;
        }

        .card-footer {
            background: none;
            border-top: none;

            .media {
                img {
                    border: solid 3px rgba(255, 255, 255, 0.3);
                }
            }
        }

        .card-title {
            font-weight: 800
        }

    }
</style>