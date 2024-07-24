<script>
import axios from "axios";
import { store } from "../store";
import ApartmentCard from "../components/ApartmentCard.vue";

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
      searchResults: [],
      isLoading: false,
      error: null,
      store,
      imgBaseUrl: "http://127.0.0.1:8000/storage",

      filters: {
        beds: null,
        bathroom: null,
        rooms: null,
        radius: null,
      },

      tempFilters: {
        beds: null,
        bathroom: null,
        rooms: null,
        radius: null,
      },
    };
  },

  components: {
    ApartmentCard,
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

      axios
        .get("http://127.0.0.1:8000/api/search", {
          params: {
            input: query,
            beds: this.filters.beds,
            bathroom: this.filters.bathroom,
            rooms: this.filters.rooms,
            radius: this.filters.radius,
          },
        })
        .then((response) => {
          this.store.searchResults = response.data;
          this.isLoading = false;
        })
        .catch((error) => {
          this.error = "C'é stato un errore nel caricare i dati.";
          this.isLoading = false;
        });
    },

    applyFilters() {
      this.filters = { ...this.tempFilters };
      localStorage.setItem("filters", JSON.stringify(this.filters));
      this.fetchResults(this.query); // Richiama fetchResults con i nuovi filtri applicati
    },

    loadFilters() {
      const query = this.$route.query;
      const savedFilters = localStorage.getItem("filters");

      // If initialSearch flag is present, do not load filters from local storage
      if (query.firstSearch) {
        this.filters = {
          beds: null,
          bathroom: null,
          rooms: null,
          radius: null,
        };
        this.tempFilters = { ...this.filters };
        localStorage.removeItem("filters");

        // Remove initialSearch flag from the URL without reloading the page
        this.$router.replace({
          path: this.$route.path,
          query: { q: query.q },
        });
      } else if (savedFilters) {
        this.filters = JSON.parse(savedFilters);
        this.tempFilters = { ...this.filters };
      }
    },
  },

  computed: {
    filteredApartments() {
      return this.store.searchResults.filter((apartment) => {
        const { beds, bathroom, rooms } = this.filters;

        const matchBeds = beds !== null ? apartment.beds >= beds : true;
        const matchBaths =
          bathroom !== null ? apartment.bathroom >= bathroom : true;
        const matchRooms = rooms !== null ? apartment.rooms >= rooms : true;

        return matchBeds && matchBaths && matchRooms;
      });
    },
  },
};
</script>

<template>
  <div class="container mb-5">
    <div v-if="isLoading">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-else>
      <!-- FILTERS -->
      <div class="row align-items-center py-3">
        <div class="col-3 d-flex flex-column">
          <label for="beds">Letti</label>
          <input id="beds" type="number" v-model="tempFilters.beds" />
        </div>

        <div class="col-3 d-flex flex-column">
          <label for="bathroom">Bagni</label>
          <input id="bathroom" type="number" v-model="tempFilters.bathroom" />
        </div>

        <div class="col-3 d-flex flex-column">
          <label for="rooms">Stanze</label>
          <input id="rooms" type="number" v-model="tempFilters.rooms" />
        </div>

        <div class="col-3 d-flex flex-column">
          <label for="radius">Raggio di ricerca</label>
          <input id="radius" type="number" v-model="tempFilters.radius" />
        </div>

        <div class="col-3 d-flex justify-content-end">
          <button @click="applyFilters">Applica Filtri</button>
        </div>
      </div>

      <!-- CARDS -->
      <h1>Ecco cosa abbiamo trovato vicino {{ query }}</h1>
      <div class="row row-cols-lg-3 row-cols-2 g-4 mt-3">
        <div
          class="col"
          v-for="apartment in filteredApartments"
          :key="apartment"
        >
          <router-link
            :to="{ name: 'single-result', params: { slug: apartment.slug } }"
            class="text-decoration-none"
          >
            <div class="card h-100">
              <img
                :src="`${imgBaseUrl}/${apartment.img_path}`"
                class="card-img-top"
                alt="Apartment Image"
                v-if="apartment.img_path"
              />
              <img
                src="https://t3.ftcdn.net/jpg/05/52/37/18/360_F_552371867_LkVmqMEChRhMMHDQ2drOS8cwhAWehgVc.png"
                alt="Default Image"
                v-else
              />

              <div class="card-body d-flex flex-column justify-content-start">
                <h5 class="card-title">{{ apartment.title }}</h5>
                <p class="card-text">{{ apartment.apartment_description }}</p>
                <ul class="list-unstyled">
                  <li>
                    Letti: {{ apartment.beds }}, Bagni:
                    {{ apartment.bathroom }}, Stanze: {{ apartment.rooms }}
                  </li>
                </ul>

              </div>
            </div>
          </router-link>
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
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  min-height: 500px;
  
}

.card:hover {
  transform: scale(1.05);
}

.card-img-top {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  min-height: 300px;
  object-fit: cover;
  object-position: center;
}

.card-body {
  padding: 15px;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-text {
  font-size: 0.9rem;
  color: #555;
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
  margin-bottom: 15px;
}

.ms_btn {
  background-color: $orange;
  color: $white;
}

.ms_btn:hover {
  background-color: #fb7a4f;
  color: $white;
}


</style>
