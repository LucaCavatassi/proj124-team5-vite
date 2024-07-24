<script>
	import axios from "axios";
	import { debounce } from "lodash";
	import { store } from "../store";

	export default {
		data() {
			return {
				paginatedFeatured: [],
				allFeatured: [],
				curPage: 1,
				totalPage: 0,
				screenSize: "large",
				store,
				slug: null,
			};
		},
		created() {
			this.debouncedUpdateScreenSize = debounce(this.updateScreenSize, 300);
			// Initial check to set the screen size
			this.updateScreenSize();

			// Add event listener for window resize
			window.addEventListener("resize", this.debouncedUpdateScreenSize);
			console.log(this.store);
		},

		methods: {
			updateScreenSize() {
				// Check if the window width matches the media query
				if (window.matchMedia("(min-width: 600px)").matches) {
					this.screenSize = "large";
					this.fetchFeatured();
				} else {
					this.screenSize = "small";
					this.fetchFeaturedAll();
				}
			},

			beforeDestroy() {
				// Remove the event listener when the component is destroyed
				window.removeEventListener("resize", this.debouncedUpdateScreenSize);
			},

			fetchFeatured() {
				axios
					.get("http://127.0.0.1:8000/api/featured", {
						params: {
							page: this.curPage,
						},
					})
					.then((resp) => {
						// console.log(resp);
						this.totalPage = resp.data.last_page;
						this.paginatedFeatured = resp.data["data"];
					});
			},

			fetchFeaturedAll() {
				axios.get("http://127.0.0.1:8000/api/featured-mobile").then((resp) => {
					this.allFeatured = resp.data;
					// console.log(resp.data);
				});
			},

			nextPage() {
				if (this.curPage < this.totalPage) {
					this.curPage++;
					this.fetchFeatured();
				} else {
					this.curPage = 1;
					this.fetchFeatured();
				}
			},

			prevPage() {
				if (this.curPage > 1) {
					this.curPage--;
					this.fetchFeatured();
				} else {
					this.curPage = this.totalPage;
					this.fetchFeatured();
				}
			},
		},
	};
</script>

<template class="ms_wrap">
	<div class="container">
		<div class="row">
			<div class="d-flex justify-content-between mt-4">
				<h1>Ecco i nostri migliori appartamenti</h1>
				<div v-if="screenSize === 'large'">
					<button class="btn ms_btn me-2" @click="prevPage">
						<i class="fa-solid fa-circle-chevron-left"></i>
					</button>
					<button class="btn ms_btn" @click="nextPage">
						<i class="fa-solid fa-circle-chevron-right"></i>
					</button>
				</div>
			</div>
			<div v-if="screenSize === 'large'" class="container">
				<div class="row">
					<div class="col-4 py-5" v-for="featured in this.paginatedFeatured">
						<div class="card">
							<img src="https://www.apartments.com/blog/sites/default/files/styles/x_large_hq/public/image/2023-06/ParkLine-apartment-in-Miami-FL.jpg?itok=kQmw64UU"
								class="card-img-top" alt="" />
							<div class="card-body">
								<h5 class="card-title">{{ featured.title }}</h5>
								<p class="card-text">{{ featured.apartment_description }}</p>
		
								<router-link :to="{ name: 'single-result', params: { slug: featured.slug } }"
									class="btn btn-primary ms_btn">Scopri di più</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		
			<div v-if="screenSize === 'small'" class="container">
				<div class="row">
					<div class="col-12 py-5" v-for="featured in this.allFeatured">
						<div class="card">
							<img src="https://www.apartments.com/blog/sites/default/files/styles/x_large_hq/public/image/2023-06/ParkLine-apartment-in-Miami-FL.jpg?itok=kQmw64UU"
								class="card-img-top" alt="" />
							<div class="card-body">
								<h5 class="card-title">{{ featured.title }}</h5>
								<p class="card-text">{{ featured.apartment_description }}</p>
								<router-link :to="{ name: 'single-result', params: { slug: featured.slug } }"
									class="btn btn-primary ms_btn">Scopri di più</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<style scoped lang="scss">
	@use "../style/partials/palette" as *;

	.card {
		border-color: $green;
		height: 100%;
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