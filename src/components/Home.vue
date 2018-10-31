<template>
  <div class="home">
    <mu-flex justify-content="center" align-items="center" wrap="wrap" class="icon-flex-wrap">
      <mu-button color="primary">
        ACCEPT
        <mu-icon value="check_circle" right></mu-icon>
      </mu-button>
      <mu-button color="red">
        DECLINE
        <mu-icon value="block" right></mu-icon>
      </mu-button>
      <mu-button color="darkBlack">
        <mu-icon value="remove_circle" left></mu-icon>CANCEL
      </mu-button>
      <mu-button color="orange">
        <mu-icon value="arrow_back" left></mu-icon>BACK
      </mu-button>
      <mu-button color="purple">
        <mu-icon value="build"></mu-icon>
      </mu-button>
      <mu-button color="indigo">
        <mu-icon value="backup"></mu-icon>
      </mu-button>
      <mu-button color="blue" icon>
        <mu-icon value="thumb_up"></mu-icon>
      </mu-button>
      <mu-button color="red" icon>
        <mu-icon value="thumb_down"></mu-icon>
      </mu-button>
    </mu-flex>
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
  .icon-flex-wrap .mu-button {
    margin: 6px 8px;
  }
</style>
