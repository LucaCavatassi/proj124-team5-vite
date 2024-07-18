<script>
    import axios from 'axios';
    import { store } from "/src/store.js";


    export default {
    name: "ResultsPage",
    data() {
        return {
            store,
            location: "",
            searchResults: [],
        };
    },
    created() {   
            axios.get("http://127.0.0.1:8000/api/search").then((resp)=> {
                this.searchResults = resp.data.results;
                
                console.log(this.searchResults);

                return this.searchResults;
            });
    }
}

        
</script>

<template>
    <div class="container">
        <div>
            <h1>Risultati</h1>
            <ul>
                <li v-for="result in searchResults">{{ result.title }}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
    
</style>