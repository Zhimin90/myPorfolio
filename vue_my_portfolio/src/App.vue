<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/home"> Zhimin Zou</router-link>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" :class="{ 'is-active': showNav }" @click="showNav = !showNav">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-start">

        </div>

        <div class="navbar-end">
          <router-link to="/home" class="navbar-item">
           Home
          </router-link>
          <router-link to="/about" class="navbar-item">
           About
          </router-link>
          <router-link to="/projects" class="navbar-item">
           Projects
          </router-link>
          <router-link to="/contact" class="navbar-item">
           Contact
          </router-link>
       </div>
     </div>
   </nav>
   <router-view />
   <footer class="footer">
    <div class="content has-text-centered">
      <p>
        Built by Zhimin Zou with Flask, Vue.js, Bulma, and Airtable. <a href="https://github.com/Zhimin90/myPorfolio">Github link</a>
      </p>
    </div>
  </footer>
</div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return{
        showNav: false
      }
    },
  };
</script>

<style type="text/css">
#app {
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 100px; /* height of your footer */
}
footer {
 position: absolute;
 bottom: 0;
 width: 100%;
}
</style>

<style lang="sass">
@import "~bulma/bulma.sass"
</style>
