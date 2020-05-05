<template>
  <div class="calendar">
    <v-calendar
      dark
      type="month"
      :events="getEvents"
      :start="`${currentYear}-10-01`"
      :end="`${currentYear}-10-31`"
    ></v-calendar>
  </div>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
    getEvents() {
      return this.$store.getters['marathon/getCalendarEvents'];
    }
  }
};
</script>

<style></style>
