<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

        <a @click.prevent="isOpen = !isOpen" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active' : isOpen }">
        <div class="navbar-start">

        <router-link exact-active-class="active" class="navbar-item" to="/">
            <i class="fab fa-vuejs fa-pull-left"></i>
            Home
        </router-link>

        <router-link exact-active-class="active" class="navbar-item" to="/exercise">
            <i class="fas fa-ghost fa-pull-left"></i>
            Add Exercise
        </router-link>

        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" active-class="kind-of-active">
            More
            </a>

            <div class="navbar-dropdown">
                <router-link class="navbar-item" to="/about" exact-active-class="active">
                    <i class="fab fa-vuejs fa-pull-left"></i>
                    About
                </router-link>
            <a class="navbar-item">
                Jobs
            </a>
            <a class="navbar-item">
                Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
                Report an issue
            </a>
            </div>
        </div>
        </div>

        <div class="navbar-end">
        <div class="navbar-item">
            <div class="buttons">
            <router-link to="/signup">
            <a class="button is-primary">
                <strong>Sign up</strong>
            </a>
            </router-link>
            <router-link to='/login'>
            <a class="button is-light">
                Log in
            </a>
            </router-link>
            </div>
        </div>
        </div>
    </div>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            isOpen: false
        }
    }
}
</script>

<style>
    .active {
        background-color: rgb(231, 34, 20);
        font-weight: bold;
    }
    .kind-of-active {
        background-color: rgb(0, 0, 0);
        font-weight: 100;
    }
</style>