<template>
  <v-app>
    <top-nav @stick="emitStick"/>
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
    methods: {
      emitStick() {
        this.$emit('stick');
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>