<script>
import axios from "axios";

    export default {
        data() {
            return{
                allFeatured: [],
                curPage: 1,
                totalPage: 0,
            }
        },
        created() {
                this.fetchFeatured()
        },

        methods: {
            fetchFeatured() {
                axios.get("http://127.0.0.1:8000/api/featured",{
                    params: {
                        page: this.curPage
                    }
                }).then((resp)=>{
                    this.totalPage = resp.data.last_page ;
                    this.allFeatured = resp.data["data"];
                    console.log(resp);
                })
            },

            nextPage() {
                if (this.curPage < this.totalPage ) {
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
        }
    }
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="d-flex justify-content-between mt-4">
                <h1>Ecco i nostri migliori appartamenti</h1>
                <div>
                    <button class="btn ms_btn me-2" @click="prevPage"><i class="fa-solid fa-circle-chevron-left"></i></button>
                    <button class="btn ms_btn" @click="nextPage"><i class="fa-solid fa-circle-chevron-right"></i></button>
                </div>
            </div>
        </div>
    </div>


    <div class="container">
        <div class="row">
            <div class="col-4 py-5" v-for="featured in this.allFeatured">
                <div class="card">
                    <img src="https://www.apartments.com/blog/sites/default/files/styles/x_large_hq/public/image/2023-06/ParkLine-apartment-in-Miami-FL.jpg?itok=kQmw64UU" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{ featured.title }}</h5>
                        <p class="card-text">{{ featured.apartment_description }}</p>
                        <a href="#" class="btn ms_btn">Scopri di più</a>
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
        background-color:  $orange;
        color: $white;
    }
    .ms_btn:hover {
        background-color: #fb7a4f;
        color: $white;
    }
</style>