<script>
    import SearchBar from "../components/SearchBar.vue"
    import {VueWriter} from 'vue-writer';
    export default {
            name: "CarouselJumbo",
            components:{VueWriter, SearchBar }
        }
</script>

<template>
    <div class="wrapper">
        <div class="carousel-wrapper">
            <div class="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/src/assets/jumbo/jumbo_1.jpg" class="d-block" alt="jumbo_img1">
                    </div>
                    <div class="carousel-item">
                        <img src="/src/assets/jumbo/jumbo_2.jpg"  class="d-block" alt="jumbo_img2">
                    </div>
                    <div class="carousel-item">
                        <img src="/src/assets/jumbo/jumbo_3.jpg"  class="d-block" alt="jumbo_img3">
                    </div>
                    <div class="carousel-item">
                        <img src="/src/assets/jumbo/jumbo_4.jpg"  class="d-block" alt="jumbo_img4">
                    </div>
                </div>
                <div class="overlay">
        
                </div>
            </div>
        </div>
    
        <div class="container ms_container_home d-flex flex-column justify-content-center py-2">
                <div class="row">
                    <h1 class="px-lg-5 text-white"> Voglio andare a <VueWriter style="color: #FE5D26;" class="d-inline" :eraseSpeed="50" :array="['Londra','Parigi','Roma','Berlino','Madrid','Milano']"/></h1> 
                </div>
                
                <div class="row ms_search">
                    <SearchBar/>
                </div>
                
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use "../style/general" as *;

    .wrapper {
        position: relative;
        margin-top: 40px;
        min-height: 100%;

        .ms_container_home {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    

    .overlay {
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-color:rgba(0, 0, 0, 0.5);
        z-index:1;
        color:white;
    }


</style>
