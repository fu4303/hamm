<template>
  <div id="app">
    <vue-nav />
    <vue-sub-nav />
    <router-view/>
  </div>
</template>

<script>
import VueNav from './components/VueNav';
import VueSubNav from './components/VueSubNav';
export default {
  components: {
    VueNav,
    VueSubNav
  }
}
</script>


<style lang="scss">
  :root {
    --orange: #E86252;
  }
</style>
