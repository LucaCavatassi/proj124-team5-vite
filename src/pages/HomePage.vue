<script>
        import {VueWriter} from 'vue-writer'
    export default {
        name: "HomePage",
        components: {VueWriter}
    }


</script>

<template>
    <div class="container">
        <h1> Voglio andare a <VueWriter class="d-inline" :eraseSpeed="50" :array="[
    'Londra',
    'Parigi',
    'Roma',
    'Berlino',
    'Madrid',
    'Vienna',
    'Praga',
    'Amsterdam',
    'Lisbona',
    'Atene',
    'Milano',
]" /></h1> 
    </div>
</template>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');

    .container {
        font-family: "Quicksand", Arial, Helvetica, sans-serif;
        h1{
            font-weight: bold;
        }
    }

</style>