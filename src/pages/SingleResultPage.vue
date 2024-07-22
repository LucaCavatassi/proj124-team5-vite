<script>
import axios from 'axios';

export default {
    name: "SingleResultPage",
    props: ['slug'],
    data() {
        return {
            apartment: null
        };
    },
    created() {
        this.fetchApartmentDetails();
    },
    methods: {
        fetchApartmentDetails() {
            axios.get(`http://127.0.0.1:8000/api/apartment/${this.slug}/apartment-details`)
                .then(response => {
                    this.apartment = response.data;
                })
                .catch(error => {
                    console.error("Error fetching apartment details:", error);
                });
        }
    }
}
</script>

<template>
    <div class="container">
        <div v-if="apartment">
            <h1 class="fw-bold">{{ apartment.title }}</h1>
            <p class="fw-bold">{{ apartment.apartment_description }}</p>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    margin-top: 6rem;
}
</style>
