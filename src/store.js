import { reactive } from "vue";

export const store = reactive({
    location: ""
});

localStorage.setItem('query_search', this.location);