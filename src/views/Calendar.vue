<template>
  <v-row class="fill-height" id="test">
    <v-col>
      <h1 v-show="show" class="custom">{{currentYear}} Halloween Marathon</h1>
      <v-sheet height="500">
        <v-calendar
          ref="calendar"
          :dark="!show"
          :light="show"
          type="month"
          :short-weekdays="false"
          event-color="transparent"
          :events="getEvents"
          :event-height="22"
          :event-margin-bottom="-20"
          :start="`${currentYear}-10-01`"
          :end="`${currentYear}-10-31`"
        ></v-calendar>
      </v-sheet>
      <div class="">
        <v-btn
          outlined
          @click="generateRandom">
          Get Random Movies
        </v-btn>
        <v-btn
          outlined
          @click="generatePDF">
          Generate PDF
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import html2pdf from 'html2pdf.js';
export default {
  data() {
    return {
      show: false
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
    getEvents() {
      return this.$store.getters['marathon/getCalendarEvents'];
    }
  },
  methods: {
    generateRandom() {
      console.log(this);
    },
    async generatePDF() {
      // const element = document.getElementById('element-to-print');
      const opt = {
        margin:       0.75,
        filename:     `${this.currentYear} Halloween Marathon Schedule.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
      };

      // New Promise-based usage:
      this.show = true;
      this.$refs.calendar.eventColor = "red";
      await html2pdf().set(opt).from(this.$el).save();
      this.$nextTick(() => {
        this.show = false
      }, 500)
    }
  }
};
</script>

<style>
.v-calendar .v-event {
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  margin: 0 auto;
}

.v-btn:not(.v-btn--text):not(.v-btn--outlined):hover:before,
.theme--light.v-btn:focus::before {
  opacity: 0;
}
</style>
<style lang="scss" scoped>
.custom {
  font-size: 18px;
  text-align: center;
}
</style>
