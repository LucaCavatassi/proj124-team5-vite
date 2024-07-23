<script>
    import axios from 'axios';
import ContactForm from '../components/ContactForm.vue';

    export default {
        name: "SingleResultPage",
        props: ['slug'],
        components: {ContactForm},
        data() {
            return {
                apartment: null,
                imgBaseUrl: 'http://127.0.0.1:8000/storage',
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
                        console.log(this.apartment);
                    })
                    .catch(error => {
                        console.error("Errore nel prendere i dati:", error);
                    });
            }
        }
    }
</script>

<template>
    <div class="container">
        <div class="row" v-if="apartment">
            <h1 class="fw-bold">{{ apartment.title }}</h1>

            <img :src="`${imgBaseUrl}/${apartment.img_path}`" class="card-img-top" alt="Apartment Image"
                v-if="apartment.img_path">
            <img src="https://t3.ftcdn.net/jpg/05/52/37/18/360_F_552371867_LkVmqMEChRhMMHDQ2drOS8cwhAWehgVc.png"
                alt="Default Image" v-else>
        </div>
        <div v-else>
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <p>Descrizione:{{ apartment.apartment_description }}</p>
        <span>Bagni:{{ apartment.bathroom }}</span>
        <span>Camere da letto:{{ apartment.beds }}</span>
        <span>Dimensione:{{ apartment.square_mt }}</span>
        <ul>
            <li v-for="(service, index) in apartment.services">
                {{service.title}}
            </li>
        </ul>

    </div>
    <ContactForm :apartment_id="apartment.id"/>

</template>

<style scoped lang="scss">
    .container {
        margin-top: 6rem;
    }
</style>