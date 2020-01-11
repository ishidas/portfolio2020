<template>
  <v-app>
    <img :src="imageUrl" alt="Photo by Annie Spratt on Unsplash" />
    <top-nav />
    <nuxt/>
  </v-app>
</template>

<script>
import TopNav from '../components/topNav.vue';
  export default {
    components: {
      TopNav,
    },
    data() {
      return {
        imageUrl: './annie-spratt-OWq8w3BYMFY-unsplash.jpg',
      }
    },
  }
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
  }
  nav {
    position: fixed;
    top: 0;
  }
</style>