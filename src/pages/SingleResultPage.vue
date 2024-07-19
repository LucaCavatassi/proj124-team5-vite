<script>
    import { store } from '../store';

    export default {
        name: "SingleResultPage",
        created() {
            console.log(this.store);
        },
        data() {
            return {
                store,
                
            }
        },
    }
</script>

<template>
    <div class="container">
        <div class="row">
            <h1 class="fw-bold">{{ store.searchResults[0].title }}</h1>
            <p class="fw-bold">{{ store.searchResults[0].title }}</p>

        </div>
    </div>
</template>

<style scoped lang="scss">

</style>