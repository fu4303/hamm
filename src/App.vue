<template>
  <div id="app">
    <vue-nav />
    <router-view/>
  </div>
</template>

<script>
import VueNav from './components/VueNav';
export default {
  components: {
    VueNav
  }
}
</script>


<style lang="scss">

</style>
