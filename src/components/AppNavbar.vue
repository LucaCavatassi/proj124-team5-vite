<script>
</script>

<template>
    <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
        <router-link :to="{ name: 'home' }" class="navbar-brand">
            <img src="/src/assets/boolbnb_logo.jpeg" alt="Logo" class="d-inline-block align-text-top">
        </router-link>
    </div>
</nav>
</template>

<style scoped lang="scss">
    .container-fluid {
        img {
            width: 15%;
        }
    }
</style>