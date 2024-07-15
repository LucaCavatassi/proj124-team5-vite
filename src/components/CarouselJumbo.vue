<script>
</script>

<template>
    <div id="carusel_bg" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="/src/assets/jumbo/jumbo_1.jpg" class="d-block w-100" alt="jumbo_img1">
            </div>
            <div class="carousel-item">
                <img src="/src/assets/jumbo/jumbo_2.jpg"  class="d-block w-100" alt="jumbo_img2">
            </div>
            <div class="carousel-item">
                <img src="/src/assets/jumbo/jumbo_3.jpg"  class="d-block w-100" alt="jumbo_img3">
            </div>
            <div class="carousel-item">
                <img src="/src/assets/jumbo/jumbo_4.jpg"  class="d-block w-100" alt="jumbo_img4">
            </div>
        </div>
        <div class="overlay">

        </div>
    </div>
</template>

<style scoped lang="scss">
    @use "../style/partials/palette" as *;

    
    .carousel {
        position: absolute;
        z-index: 0;
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
