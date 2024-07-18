<script>
    import axios from 'axios';
    import { store } from "/src/store.js";


    export default {
    name: "ResultsPage",
    data() {
        return {
            store,
            isLoading: false,
            searchResults: [],
        };
    },
    created() { 
        if ( this.store.location === null ) {
            isLoading = true;
        }  else {
            setTimeout(function() {

                axios.get("http://127.0.0.1:8000/api/search").then((resp)=> {
                    // this.searchResults = resp.data.results;
                    
                    console.log(resp);

                    // return this.searchResults;
                });
            },1000);
        }
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