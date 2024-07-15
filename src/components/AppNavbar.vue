<script>
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div class="container-fluid">
            <router-link class="w-50" :to="{ name: 'home' }">
                <img src="/src/assets/boolbnb_logo.jpeg" alt="Logo" class="align-text-top">
            </router-link>


            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>


            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link :to="{ name: 'search' }" class="nav-link">
                            Ricerca Avanzata
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'login' }" class="nav-link">
                            Login
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
    @use "../style/partials/palette" as *;
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');

    .container-fluid {
        font-family: "Quicksand", Arial, Helvetica, sans-serif;
        img {
            width: 30%;
        }
        li {
            text-decoration: none;
        }

        .router-link-active {
            color: $orange;
            
        }
    };

    @media screen and (min-width: 1024px) {
    .container-fluid {
        max-height: 80px;
        }
    }
</style>