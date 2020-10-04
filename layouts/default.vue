<template>
  <div>
    <top-nav @stick="emitStick"/>
    <nuxt/>
  </div>
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