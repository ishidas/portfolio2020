<template>
  <v-app>
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
        
      }
    },
  }
</script>

<style lang="scss" scoped>
  nav {
    position: fixed;
    top: 0;
  }
</style>