<script>
	import axios from "axios";
	import ContactForm from "../components/ContactForm.vue";
	import FeaturedApartments from "../components/FeaturedApartments.vue";

	export default {
		name: "SingleResultPage",
		props: ["slug"],
		components: { ContactForm, FeaturedApartments },
		data() {
			return {
				apartment: null,
				imgBaseUrl: "http://127.0.0.1:8000/storage",
			};
		},
		created() {
			this.fetchApartmentDetails();
		},
		mounted() {
			this.viewRegister();
			console.log(this.apartment.id);
		},
		methods: {
			fetchApartmentDetails() {
				axios
					.get(`http://127.0.0.1:8000/api/apartment/${this.slug}/apartment-details`)
					.then((response) => {
						this.apartment = response.data;
						// console.log(this.apartment);
					})
					.catch((error) => {
						console.error("Errore nel prendere i dati:", error);
					});
			},

			goBackToResults() {
				this.$router.push({ name: "SearchResults", query: { q: this.$route.query.q } });
			},

			viewRegister() {
				axios.post("http://127.0.0.1:8000/api/view", {
					apartment_id: this.apartment.id,
					user_id: this.apartment.user_id,
					title: this.apartment.title
				})
				.then((response) => {
					console.log('Visita registrata');
				})
				.catch((error) => {
					console.log('errore nella registrazione', error);
				})
			},
		},
	};
</script>

<template>
	<div class="container">
		<div class="d-flex justify-content-end">
			<!-- <router-link to="/" class="btn my-button ms_btn btn-primary mb-3">Home page</router-link> -->
			<button @click="goBackToResults" class="btn my-button ms_btn btn-secondary mb-3">Torna ai risultati di
				ricerca</button>

		</div>
		<div class="row img_container" v-if="apartment">
			<h1 class="fw-bold">{{ apartment.title }}</h1>
			<p>{{ apartment.address }}</p>
			<img :src="`${imgBaseUrl}/${apartment.img_path}`" class="card-img-top ms_img" alt="Apartment Image"
				v-if="apartment.img_path" />
			<img class="ms_img card-img-top w-25"
				src="https://t3.ftcdn.net/jpg/05/52/37/18/360_F_552371867_LkVmqMEChRhMMHDQ2drOS8cwhAWehgVc.png"
				alt="Default Image" v-else />
		</div>
		<div v-else>
			<div class="spinner-border text-primary" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
		</div>
		<div class="row ms_row p-4 mt-3">
			<h3>Descrizione:</h3>
			<p>{{ apartment.apartment_description }}</p>
		</div>
		<div class="row ms_row p-4 mt-3 mb-5">
			<div class="col-6">
				<h5>Caratteristiche</h5>
				<ul>
					<li>Bagni: {{ apartment.bathroom }}</li>
					<li>Camere da letto: {{ apartment.beds }}</li>
					<li>Dimensione: {{ apartment.square_mt }}</li>
				</ul>
			</div>
			<div class="col-6">
				<h5>Servizi</h5>
				<ul>
					<li v-for="(service, index) in apartment.services" :key="index">
						{{ service.title }}
					</li>
				</ul>
			</div>
		</div>

	</div>
	<ContactForm :apartment_id="apartment.id" class="mb-3" />
</template>

<style scoped lang="scss">
	.container {
		margin-top: 6rem;

		.ms_img {
			border-radius: 2rem;
		}

		.ms_row {
			border-radius: 50px;
			background-color: rgb(234, 234, 234);
		}

		.my-button {
			width: fit-content;

			&:hover {
				background-color: #fb7a4f;
				color: white;

			}
		}
	}
</style>