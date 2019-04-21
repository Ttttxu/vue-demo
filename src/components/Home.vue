<template>
  <div class="home-wrapper">
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
  import header from './header/header.vue';
  export default {
    name: 'home',
    components:{
      'v-header':header
    },
    data () {
      return {
        msg: 'Please Log In'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .aa{
    height: 1000px;
  }
</style>
