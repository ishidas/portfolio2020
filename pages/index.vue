<template>
  <div>
    <top-nav />
    <h1>{{title}}</h1>
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
        showMenu: true,
        title: 'Hello World',
        items: [{title: 'home'}, {title: 'about'}, {title: 'contact'}]
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>