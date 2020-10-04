<template>
  <div>
    <top-nav @stick="emitStick"/>
    <nuxt/>
    <Footer />
  </div>
</template>

<script>
import TopNav from '../components/topNav.vue';
import Footer from '../components/footer.vue';
  export default {
    components: {
      TopNav,
      Footer,
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