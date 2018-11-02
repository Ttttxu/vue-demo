<template>
  <div class="home">
    <mu-button color="primary" href="#/one">
      CLICK
      <mu-icon value="check_circle" right></mu-icon>
    </mu-button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Please Log In'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  mu-button {
    margin: 6px 8px;
  }
</style>
