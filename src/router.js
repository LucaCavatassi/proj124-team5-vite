import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import LoginPage from "./pages/LoginPage.vue";
import ResultsPage from "./pages/ResultsPage.vue";
import SearchPage from "./pages/SearchPage.vue";
import SingleResultPage from "./pages/SingleResultPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage
        },
        {
            path: "/login",
            name: "login",
            component: LoginPage 
        },
        {
            path: "/search",
            name: "search",
            component: SearchPage 
        },
        {
            path: "/results",
            name: "SearchResults",
            component: ResultsPage,
            props: (route) => ({ query: route.query.q })
        },
        {
            path: "/results/:slug",
            name: "single-result",
            component: SingleResultPage 
        }
    ]
});

export { router }