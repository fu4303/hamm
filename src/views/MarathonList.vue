<template>
  <div class="about">
    <h1>This is the marathon list page</h1>
  </div>
</template>

<script>
export default {
  computed: {
    marathonList() {
      return this.$store.getters['marathon/marathonList'];
    }
  }
};
</script>

<style lang="scss"></style>
