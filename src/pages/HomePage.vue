<script>
        import SearchBar from "../components/SearchBar.vue"
        import CarouselJumbo from "../components/CarouselJumbo.vue"
        import FeaturedApartments from "../components/FeaturedApartments.vue"
        import {VueWriter} from 'vue-writer';
        
    export default {
        name: "HomePage",
        components:{VueWriter, SearchBar, CarouselJumbo, FeaturedApartments }
    }


</script>

<template>
    <div class="ms_carousel">
        <CarouselJumbo/>
    
    </div>
    <FeaturedApartments/>
</template>

<style scoped lang="scss">
    @use "../style/general/" as *;


        .ms_container_home {
            position: relative;
            z-index: 2;
            
        }
        h1 {
            font-weight: bold;
            color: $white;
        }
</style>